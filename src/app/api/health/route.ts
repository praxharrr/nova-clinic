import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();
  const { error } = await supabase.auth.getSession();
  return NextResponse.json({ ok: !error, error: error?.message ?? null });
}