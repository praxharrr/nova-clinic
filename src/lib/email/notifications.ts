import "server-only";
import { sendEmail } from "./resend";
import {
  bookingConfirmationForPatient,
  newBookingForClinic,
  newSignupForClinic,
  type BookingEmailInput,
  type Patient,
} from "./templates";

export async function notifyNewBooking(input: BookingEmailInput) {
  const clinic = process.env.NOTIFY_EMAIL;
  const jobs: Promise<boolean>[] = [];

  if (clinic) {
    jobs.push(
      sendEmail({
        to: clinic,
        ...newBookingForClinic(input),
        replyTo: input.patient.email || undefined,
      })
    );
  } else {
    console.error("NOTIFY_EMAIL is not set: clinic was not notified");
  }

  if (input.patient.email) {
    jobs.push(
      sendEmail({
        to: input.patient.email,
        ...bookingConfirmationForPatient(input),
        replyTo: clinic,
      })
    );
  }

  await Promise.allSettled(jobs);
}

export async function notifyNewSignup(patient: Patient) {
  const clinic = process.env.NOTIFY_EMAIL;
  if (!clinic) {
    console.error("NOTIFY_EMAIL is not set: clinic was not notified");
    return;
  }
  await sendEmail({ to: clinic, ...newSignupForClinic(patient) });
}