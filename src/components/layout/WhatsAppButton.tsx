import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  const text = encodeURIComponent(
    "Hello, I'd like to ask about an appointment at Nova Health & Wellness."
  );

  return (
    <a
      href={`https://wa.me/${site.whatsappNumber}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-forest-900 px-4 py-3.5 text-beige-50 shadow-lg ring-1 ring-gold-500/60 transition hover:bg-forest-800"
    >
      <MessageCircle className="size-6 text-gold-400" aria-hidden />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp us</span>
    </a>
  );
}