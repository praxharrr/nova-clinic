export const SLOT_VALUES = ["morning", "afternoon", "evening"] as const;
export type Slot = (typeof SLOT_VALUES)[number];

export const SLOT_LABELS: Record<Slot, string> = {
  morning: "Morning (9am to 12pm)",
  afternoon: "Afternoon (12pm to 5pm)",
  evening: "Evening (5pm to 8pm)",
};

export const slotLabel = (value: string) => SLOT_LABELS[value as Slot] ?? value;