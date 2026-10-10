import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { MobileBookBar } from "@/components/layout/MobileBookBar";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LocalBusinessJsonLd />
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-forest-900 px-5 py-3 text-beige-50 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div id="main">{children}</div>
      <SiteFooter />
      <MobileBookBar />
      <WhatsAppButton />
    </>
  );
}