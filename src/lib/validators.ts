import { z } from "zod";
import { BOOKING_SERVICE_VALUES } from "@/lib/data/services";
import { SLOT_VALUES } from "@/lib/data/booking";
import { addDays, londonToday } from "@/lib/dates";

export const signupSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Enter a valid phone number")
    .regex(/^[+\d\s()-]+$/, "Enter a valid phone number"),
  password: z
    .string()
    .min(8, "Use at least 8 characters")
    .max(72, "Password is too long"),
  consent: z.literal("on", { message: "Please agree to continue" }),
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password"),
});

export const bookingSchema = z.object({
  service: z.enum(BOOKING_SERVICE_VALUES, { message: "Choose a service" }),
  preferredDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a date")
    .refine(
      (d) => d >= londonToday() && d <= addDays(londonToday(), 180),
      "Choose a date within the next 6 months"
    ),
  preferredSlot: z.enum(SLOT_VALUES, { message: "Choose a time of day" }),
  note: z
    .string()
    .trim()
    .max(500, "Please keep your message under 500 characters")
    .optional(),
  consent: z.literal("on", { message: "Please agree to continue" }),
});