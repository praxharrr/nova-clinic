"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";

const STATUSES = ["pending", "confirmed", "completed", "cancelled"];

export async function updateAppointmentStatus(formData: FormData) {
  const { supabase } = await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !STATUSES.includes(status)) return;

  const { error } = await supabase
    .from("appointments")
    .update({ status })
    .eq("id", id);

  if (error) console.error("updateAppointmentStatus failed:", error.message);

  revalidatePath("/admin");
  revalidatePath("/account");
}