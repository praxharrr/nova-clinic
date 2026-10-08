import { formatDate } from "@/lib/dates";
import { serviceLabel } from "@/lib/data/services";
import { slotLabel } from "@/lib/data/booking";

export type Patient = { name: string; email: string; phone: string };

export type BookingEmailInput = {
  patient: Patient;
  appointmentId: string;
  service: string;
  preferredDate: string;
  preferredSlot: string;
  hasNote: boolean;
};

const siteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

function layout(title: string, body: string) {
  return `<!doctype html>
<html>
<body style="margin:0;background:#f4ede2;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#17332b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="background:#17332b;padding:24px 32px;text-align:center;">
            <div style="font-family:Georgia,serif;font-size:28px;letter-spacing:8px;color:#f4ede2;">NOVA</div>
            <div style="font-size:11px;letter-spacing:3px;color:#c9a24d;text-transform:uppercase;margin-top:4px;">Health &amp; Wellness</div>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <h1 style="font-family:Georgia,serif;font-size:24px;font-weight:600;margin:0 0 20px;">${esc(title)}</h1>
            ${body}
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function rows(items: [string, string][]) {
  const tr = items
    .map(
      ([label, value]) => `<tr>
        <td style="padding:10px 0;border-bottom:1px solid #eadfcf;font-size:13px;color:#6b7f77;width:140px;vertical-align:top;">${esc(label)}</td>
        <td style="padding:10px 0;border-bottom:1px solid #eadfcf;font-size:15px;">${esc(value)}</td>
      </tr>`
    )
    .join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">${tr}</table>`;
}

function button(href: string, label: string) {
  return `<a href="${esc(href)}" style="display:inline-block;background:#17332b;color:#f4ede2;text-decoration:none;padding:14px 28px;border-radius:999px;font-size:15px;">${esc(label)}</a>`;
}

const para = (s: string) =>
  `<p style="font-size:16px;line-height:1.6;margin:0 0 16px;">${s}</p>`;

// ---- 1. Clinic: new appointment request ----------------------------
export function newBookingForClinic(i: BookingEmailInput) {
  const when = `${formatDate(i.preferredDate)} · ${slotLabel(i.preferredSlot)}`;
  const link = `${siteUrl()}/admin`;

  const subject = oneLine(
    `New appointment request: ${i.patient.name} (${serviceLabel(i.service)})`
  );

  const html = layout(
    "New appointment request",
    `${rows([
      ["Patient", i.patient.name],
      ["Phone", i.patient.phone || "Not provided"],
      ["Email", i.patient.email],
      ["Service", serviceLabel(i.service)],
      ["Preferred time", when],
      [
        "Message",
        i.hasNote
          ? "The patient left a message. View it in the dashboard."
          : "None",
      ],
    ])}
    ${button(link, "Open dashboard")}`
  );

  const text = [
    "New appointment request",
    "",
    `Patient: ${i.patient.name}`,
    `Phone: ${i.patient.phone || "Not provided"}`,
    `Email: ${i.patient.email}`,
    `Service: ${serviceLabel(i.service)}`,
    `Preferred time: ${when}`,
    `Message: ${i.hasNote ? "Yes, view it in the dashboard" : "None"}`,
    "",
    `Dashboard: ${link}`,
  ].join("\n");

  return { subject, html, text };
}

// ---- 2. Patient: we received your request ---------------------------
export function bookingConfirmationForPatient(i: BookingEmailInput) {
  const first = i.patient.name.split(" ")[0] || "there";
  const when = `${formatDate(i.preferredDate)} · ${slotLabel(i.preferredSlot)}`;

  const subject = "We've received your appointment request";

  const html = layout(
    "Request received",
    `${para(`Hi ${esc(first)},`)}
    ${para(
      "Thank you for requesting an appointment with Nova Health &amp; Wellness. This is a request, not a confirmed booking yet. We&rsquo;ll be in touch shortly to confirm a time."
    )}
    ${rows([
      ["Service", serviceLabel(i.service)],
      ["Preferred time", when],
    ])}
    <p style="font-size:14px;line-height:1.6;margin:0;color:#6b7f77;">If you need to change anything, just reply to this email.</p>`
  );

  const text = [
    `Hi ${first},`,
    "",
    "Thank you for requesting an appointment with Nova Health & Wellness.",
    "This is a request, not a confirmed booking yet. We'll be in touch shortly to confirm a time.",
    "",
    `Service: ${serviceLabel(i.service)}`,
    `Preferred time: ${when}`,
    "",
    "If you need to change anything, just reply to this email.",
  ].join("\n");

  return { subject, html, text };
}

// ---- 3. Clinic: new patient account ---------------------------------
export function newSignupForClinic(p: Patient) {
  const link = `${siteUrl()}/admin`;
  const subject = oneLine(`New patient account: ${p.name}`);

  const html = layout(
    "New patient account",
    `${rows([
      ["Name", p.name],
      ["Email", p.email],
      ["Phone", p.phone || "Not provided"],
    ])}
    ${button(link, "Open dashboard")}`
  );

  const text = [
    "New patient account",
    "",
    `Name: ${p.name}`,
    `Email: ${p.email}`,
    `Phone: ${p.phone || "Not provided"}`,
    "",
    `Dashboard: ${link}`,
  ].join("\n");

  return { subject, html, text };
} 