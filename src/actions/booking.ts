"use server";

import { after } from "next/server";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { bookingSchema } from "@/lib/validators";
import { notifyNewBooking } from "@/lib/email/notifications";
import type { BookingState } from "@/types/booking";

const str = (formData: FormData, key: string) =>
  String(formData.get(key) ?? "");

export async function createBooking(
  _prev: BookingState,
  formData: FormData
): Promise<BookingState> {
  const values = {
    service: str(formData, "service"),
    preferredDate: str(formData, "preferredDate"),
    preferredSlot: str(formData, "preferredSlot"),
    note: str(formData, "note"),
  };

  const parsed = bookingSchema.safeParse({
    ...values,
    consent: formData.get("consent"),
  });

  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors, values };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Please log in to book an appointment.", values };
  }

  const { service, preferredDate, preferredSlot, note } = parsed.data;

  const { data: appointment, error } = await supabase
    .from("appointments")
    .insert({
      patient_id: user.id,
      service,
      preferred_date: preferredDate,
      preferred_slot: preferredSlot,
      note: note || null,
      consent_given: true,
    })
    .select("id")
    .single();

  if (error) {
    console.error("createBooking failed:", error.message);
    return {
      error: "Sorry, we couldn't save your request. Please try again.",
      values,
    };
  }

  // Patient details for the emails.
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, email, phone")
    .eq("id", user.id)
    .single();

  const patient = {
    name: profile?.full_name || "Patient",
    email: profile?.email || user.email || "",
    phone: profile?.phone || "",
  };

  // Send emails after the response, so the patient isn't kept waiting.
  after(() =>
    notifyNewBooking({
      patient,
      appointmentId: appointment.id,
      service,
      preferredDate,
      preferredSlot,
      hasNote: Boolean(note),
    })
  );

  revalidatePath("/account");
  return { success: true };
}