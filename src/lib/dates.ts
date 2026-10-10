// "Today" in the clinic's timezone, as YYYY-MM-DD.
export function londonToday(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Europe/London" });
}

export function addDays(isoDate: string, days: number): string {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/London",
  });
}

export function isOpenDay(isoDate: string, openDays: number[]): boolean {
  return openDays.includes(new Date(`${isoDate}T00:00:00Z`).getUTCDay());
}

// The next `count` open days, starting from tomorrow (UK time).
export function upcomingOpenDates(openDays: number[], count: number): string[] {
  const out: string[] = [];
  let d = addDays(londonToday(), 1);
  for (let i = 0; i < 120 && out.length < count; i++) {
    if (isOpenDay(d, openDays)) out.push(d);
    d = addDays(d, 1);
  }
  return out;
}