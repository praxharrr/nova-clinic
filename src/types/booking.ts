export type BookingState = {
  error?: string;
  success?: boolean;
  fieldErrors?: Record<string, string[] | undefined>;
  values?: {
    service?: string;
    preferredDate?: string;
    preferredSlot?: string;
    note?: string;
  };
};