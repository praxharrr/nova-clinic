"use server";

import { after } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email/resend";
import type { ContactState } from "@/types/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .max(20, "Enter a valid phone number")
    .regex(/^[+\d\s()-]*$/, "Enter a valid phone number")
    .optional(),
  message: z
    .string()
    .trim()
    .min(5, "Please write a short message")
    .max(1000, "Please keep your message under 1000 characters"),
  consent: z.literal("on", { message: "Please agree to continue" }),
});

const str = (formData: FormData, key: string) =>
  String(formData.get(key) ?? "");

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function sendEnquiry(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Spam trap: real visitors never see or fill this field.
  if (str(formData, "website")) return { success: true };

  const values = {
    name: str(formData, "name"),
    email: str(formData, "email"),
    phone: str(formData, "phone"),
    message: str(formData, "message"),
  };

  const parsed = schema.safeParse({
    ...values,
    consent: formData.get("consent"),
  });

  if (!parsed.success) {
    return { fieldErrors: parsed.error.flatten().fieldErrors, values };
  }

  const clinic = process.env.NOTIFY_EMAIL;
  if (!clinic) {
    console.error("NOTIFY_EMAIL is not set: enquiry could not be sent");
    return {
      error:
        "Sorry, we couldn't send your message. Please call or WhatsApp us instead.",
      values,
    };
  }

  const { name, email, phone, message } = parsed.data;

  const subject = oneLine(`New website enquiry from ${name}`);
  const text = [
    "New website enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;color:#17332b;max-width:560px">
    <h2 style="font-family:Georgia,serif;font-weight:600">New website enquiry</h2>
    <p><strong>Name:</strong> ${esc(name)}<br>
    <strong>Email:</strong> ${esc(email)}<br>
    <strong>Phone:</strong> ${esc(phone || "Not provided")}</p>
    <p style="white-space:pre-wrap;background:#f4ede2;padding:16px;border-radius:12px">${esc(message)}</p>
  </div>`;

  after(() => sendEmail({ to: clinic, subject, html, text, replyTo: email }));

  return { success: true };
}