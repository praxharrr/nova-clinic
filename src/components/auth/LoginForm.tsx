"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signIn } from "@/actions/auth";
import type { AuthState } from "@/types/auth";
import { Field } from "@/components/ui/Field";
import { SubmitButton } from "@/components/ui/SubmitButton";

const initialState: AuthState = {};

export function LoginForm({
  next,
  callbackError,
}: {
  next?: string;
  callbackError?: boolean;
}) {
  const [state, action, pending] = useActionState(signIn, initialState);

  return (
    <form action={action} className="space-y-5">
      <div>
        <h1 className="text-4xl font-semibold">Welcome back</h1>
        <p className="mt-1 text-forest-900/70">
          Log in to manage your appointments.
        </p>
      </div>

      {callbackError && !state.error && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          That confirmation link has expired or was already used. Please log in,
          or sign up again.
        </p>
      )}
      {state.error && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {state.error}
        </p>
      )}

      <input type="hidden" name="next" value={next ?? ""} />

      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        defaultValue={state.values?.email}
        error={state.fieldErrors?.email?.[0]}
        required
      />
      <Field
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        error={state.fieldErrors?.password?.[0]}
        required
      />

      <SubmitButton pending={pending}>Log in</SubmitButton>

      <p className="text-center text-sm">
        New to Nova?{" "}
        <Link
          href="/signup"
          className="font-medium text-gold-600 underline-offset-4 hover:underline"
        >
          Create an account
        </Link>
      </p>
    </form>
  );
}