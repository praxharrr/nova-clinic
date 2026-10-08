"use client";

import { useActionState } from "react";
import Link from "next/link";
import { createBooking } from "@/actions/booking";
import type { BookingState } from "@/types/booking";
import { Field } from "@/components/ui/Field";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { BOOKING_SERVICE_OPTIONS } from "@/lib/data/services";
import { SLOT_LABELS, SLOT_VALUES } from "@/lib/data/booking";

const initialState: BookingState = {};

const controlClass =
  "w-full rounded-xl border border-beige-300 bg-beige-50 px-4 py-3 text-forest-900 outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30";

export function BookingForm({
  defaultService,
  minDate,
  maxDate,
}: {
  defaultService?: string;
  minDate: string;
  maxDate: string;
}) {
  const [state, action, pending] = useActionState(createBooking, initialState);

  if (state.success) {
    return (
      <div className="space-y-4 rounded-3xl bg-white/60 p-8 text-center ring-1 ring-beige-300">
        <h2 className="text-4xl font-semibold">Request received</h2>
        <p className="text-forest-900/80">
          Thank you. Our team will be in touch shortly to confirm your
          appointment.
        </p>
        <Link
          href="/account"
          className="inline-block rounded-full bg-forest-900 px-6 py-3 font-medium text-beige-50 transition hover:bg-forest-800"
        >
          View my appointments
        </Link>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="space-y-6 rounded-3xl bg-white/60 p-8 ring-1 ring-beige-300"
    >
      {state.error && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {state.error}
        </p>
      )}

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-forest-900"
        >
          What do you need help with?
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={state.values?.service ?? defaultService ?? ""}
          className={controlClass}
        >
          <option value="" disabled>
            Choose a service
          </option>
          {BOOKING_SERVICE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {state.fieldErrors?.service?.[0] && (
          <p className="mt-1.5 text-sm text-red-700">
            {state.fieldErrors.service[0]}
          </p>
        )}
      </div>

      <Field
        label="Preferred date"
        name="preferredDate"
        type="date"
        min={minDate}
        max={maxDate}
        defaultValue={state.values?.preferredDate}
        error={state.fieldErrors?.preferredDate?.[0]}
        required
      />

      <fieldset>
        <legend className="mb-1.5 block text-sm font-medium text-forest-900">
          Preferred time of day
        </legend>
        <div className="grid grid-cols-3 gap-3">
          {SLOT_VALUES.map((slot) => (
            <label key={slot} className="cursor-pointer">
              <input
                type="radio"
                name="preferredSlot"
                value={slot}
                defaultChecked={state.values?.preferredSlot === slot}
                required
                className="peer sr-only"
              />
              <span className="block rounded-xl border border-beige-300 bg-beige-50 px-4 py-3 text-center transition peer-checked:border-forest-900 peer-checked:bg-forest-900 peer-checked:text-beige-50 peer-focus-visible:ring-2 peer-focus-visible:ring-gold-500">
                {SLOT_LABELS[slot]}
              </span>
            </label>
          ))}
        </div>
        {state.fieldErrors?.preferredSlot?.[0] && (
          <p className="mt-1.5 text-sm text-red-700">
            {state.fieldErrors.preferredSlot[0]}
          </p>
        )}
      </fieldset>

      <div>
        <label
          htmlFor="note"
          className="mb-1.5 block text-sm font-medium text-forest-900"
        >
          Anything we should know? (optional)
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          maxLength={500}
          defaultValue={state.values?.note}
          className={controlClass}
        />
        <p className="mt-1.5 text-sm text-forest-900/60">
          Please don&apos;t include detailed medical history here. We&apos;ll go
          through it with you at your appointment.
        </p>
        {state.fieldErrors?.note?.[0] && (
          <p className="mt-1.5 text-sm text-red-700">
            {state.fieldErrors.note[0]}
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-forest-900/80">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 size-4 accent-forest-900"
          />
          <span>
            I agree to Nova Health &amp; Wellness using these details to contact
            me about my appointment.
          </span>
        </label>
        {state.fieldErrors?.consent?.[0] && (
          <p className="mt-1.5 text-sm text-red-700">
            {state.fieldErrors.consent[0]}
          </p>
        )}
      </div>

      <SubmitButton pending={pending}>Request appointment</SubmitButton>
    </form>
  );
}