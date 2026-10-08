"use server";

import { after } from "next/server";
import { notifyNewSignup } from "@/lib/email/notifications";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { loginSchema, signupSchema } from "@/lib/validators";
import type { AuthState } from "@/types/auth";

const str = (formData: FormData, key: string) =>
  String(formData.get(key) ?? "");

// Only allow redirects to paths inside our own site.
function safeNext(value: string) {
  return value.startsWith("/") && !value.startsWith("//") ? value : "/account";
}

export async function signUp(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const values = {
    fullName: str(formData, "fullName"),
    email: str(formData, "email"),
    phone: str(formData, "phone"),
  };

  const parsed = signupSchema.safeParse({
    ...values,
    password: str(formData, "password"),
    consent: formData.get("consent"),
  });

  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors, values };
  }

  const { fullName, email, phone, password } = parsed.data;
  const origin =
    (await headers()).get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL;

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName, phone, consent: "true" },
      emailRedirectTo: `${origin}/auth/callback?next=/account`,
    },
  });

  if (error) {
    return { error: error.message, values };
  }

  // Tell the clinic about the new patient. Skipped when the email address
  // was already registered (Supabase hides that case from the browser).
  const alreadyRegistered = data.user?.identities?.length === 0;
  if (!alreadyRegistered) {
    after(() => notifyNewSignup({ name: fullName, email, phone }));
  }

  // Email confirmation OFF: user is already logged in.
  if (data.session) {
    revalidatePath("/", "layout");
    redirect("/account");
  }

  // Email confirmation ON: ask them to check their inbox.
  return {
    message: `We've sent a confirmation link to ${email}. Click it to activate your account.`,
  };
}

export async function signIn(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const values = { email: str(formData, "email") };

  const parsed = loginSchema.safeParse({
    ...values,
    password: str(formData, "password"),
  });

  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors, values };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error) {
    const needsConfirm = error.message.toLowerCase().includes("confirm");
    return {
      error: needsConfirm
        ? "Please confirm your email address first. Check your inbox for the link."
        : "Incorrect email or password.",
      values,
    };
  }

  revalidatePath("/", "layout");
  redirect(safeNext(str(formData, "next")));
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}