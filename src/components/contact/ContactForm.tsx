"use client";

import { useActionState } from "react";
import { sendEnquiry } from "@/actions/contact";
import type { ContactState } from "@/types/contact";
import { Field } from "@/components/ui/Field";
import { SubmitButton } from "@/components/ui/SubmitButton";

const initialState: ContactState = {};

export function ContactForm() {
  const [state, action, pending] = useActionState(sendEnquiry, initialState);

  if (state.success) {
    return (
      <div className="rounded-3xl bg-beige-50 p-8 text-center ring-1 ring-beige-300">
        <h2 className="text-4xl font-medium">Message sent</h2>
        <p className="mt-3 text-forest-900/80">
          Thank you. We&apos;ll reply as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="space-y-5 rounded-3xl bg-beige-50 p-8 ring-1 ring-beige-300"
    >
      {state.error && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {state.error}
        </p>
      )}

      <Field
        label="Your name"
        name="name"
        autoComplete="name"
        defaultValue={state.values?.name}
        error={state.fieldErrors?.name?.[0]}
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
        label="Phone (optional)"
        name="phone"
        type="tel"
        autoComplete="tel"
        defaultValue={state.values?.phone}
        error={state.fieldErrors?.phone?.[0]}
      />

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-forest-900"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={1000}
          defaultValue={state.values?.message}
          required
          className="w-full rounded-xl border border-beige-300 bg-white px-4 py-3 text-forest-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
        />
        <p className="mt-1.5 text-sm text-forest-900/60">
          Please don&apos;t include detailed medical history here.
        </p>
        {state.fieldErrors?.message?.[0] && (
          <p className="mt-1.5 text-sm text-red-700">
            {state.fieldErrors.message[0]}
          </p>
        )}
      </div>

      {/* Spam trap: hidden from people, visible to bots. */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-forest-900/80">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 size-4 accent-forest-900"
          />
          <span>
            I agree to {`Nova Health & Wellness`} using these details to reply
            to my message.
          </span>
        </label>
        {state.fieldErrors?.consent?.[0] && (
          <p className="mt-1.5 text-sm text-red-700">
            {state.fieldErrors.consent[0]}
          </p>
        )}
      </div>

      <SubmitButton pending={pending}>Send message</SubmitButton>
    </form>
  );
}