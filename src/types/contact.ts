export type ContactState = {
  error?: string;
  success?: boolean;
  fieldErrors?: Record<string, string[] | undefined>;
  values?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
};