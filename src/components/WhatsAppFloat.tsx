import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-foreground text-background pl-4 pr-5 py-3 font-mono font-bold uppercase tracking-widest text-xs border border-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
    >
      <span className="relative flex items-center justify-center">
        <span className="absolute w-8 h-8 bg-accent/30 animate-pulse rounded-full" />
        <WhatsAppIcon className="w-5 h-5 relative" />
      </span>
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
};
