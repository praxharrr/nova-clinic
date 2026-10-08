"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signUp } from "@/actions/auth";
import type { AuthState } from "@/types/auth";
import { Field } from "@/components/ui/Field";
import { SubmitButton } from "@/components/ui/SubmitButton";

const initialState: AuthState = {};

export function SignupForm() {
  const [state, action, pending] = useActionState(signUp, initialState);

  if (state.message) {
    return (
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-semibold">Check your email</h1>
        <p className="text-forest-900/80">{state.message}</p>
        <Link
          href="/login"
          className="inline-block font-medium text-gold-600 underline-offset-4 hover:underline"
        >
          Back to log in
        </Link>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      <div>
        <h1 className="text-4xl font-semibold">Create your account</h1>
        <p className="mt-1 text-forest-900/70">
          Book and manage your physiotherapy appointments.
        </p>
      </div>

      {state.error && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {state.error}
        </p>
      )}

      <Field
        label="Full name"
        name="fullName"
        autoComplete="name"
        defaultValue={state.values?.fullName}
        error={state.fieldErrors?.fullName?.[0]}
        required
      />
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
        label="Phone number"
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="+44 7xxx xxxxxx"
        defaultValue={state.values?.phone}
        error={state.fieldErrors?.phone?.[0]}
        required
      />
      <Field
        label="Password"
        name="password"
        type="password"
        autoComplete="new-password"
        placeholder="At least 8 characters"
        error={state.fieldErrors?.password?.[0]}
        required
      />

      <div>
        <label className="flex items-start gap-3 text-sm text-forest-900/80">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 size-4 accent-forest-900"
          />
          <span>
            I agree to Nova Health &amp; Wellness storing my details to manage my
            appointments, as described in the{" "}
            <Link
              href="/privacy"
              className="font-medium text-gold-600 underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {state.fieldErrors?.consent?.[0] && (
          <p className="mt-1.5 text-sm text-red-700">
            {state.fieldErrors.consent[0]}
          </p>
        )}
      </div>

      <SubmitButton pending={pending}>Create account</SubmitButton>

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-gold-600 underline-offset-4 hover:underline"
        >
          Log in
        </Link>
      </p>
    </form>
  );
}