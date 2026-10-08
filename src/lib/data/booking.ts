export const SLOT_VALUES = ["morning", "afternoon", "evening"] as const;
export type Slot = (typeof SLOT_VALUES)[number];

export const SLOT_LABELS: Record<Slot, string> = {
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
};

export const slotLabel = (value: string) => SLOT_LABELS[value as Slot] ?? value;