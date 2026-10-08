export type AuthState = {
  error?: string;
  message?: string;
  fieldErrors?: Record<string, string[] | undefined>;
  values?: { fullName?: string; email?: string; phone?: string };
};