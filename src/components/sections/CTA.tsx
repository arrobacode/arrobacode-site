import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const CTA = () => {
  return (
    <section id="contato" className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative px-6 md:px-10 lg:px-16 py-24 lg:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-xs text-muted-foreground mb-6 uppercase tracking-widest flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-accent animate-pulse-dot" />
              // Próximo passo_ 05
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-[0.95] text-balance">
              Quer parar de travar projetos por falta de dev?
            </h2>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-[55ch] leading-relaxed">
              Vamos conversar e ver como a ArrobaCode pode se encaixar na sua operação.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-foreground text-background px-6 py-6 font-mono font-bold uppercase tracking-widest text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <span className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5" />
                Falar no WhatsApp
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="mt-4 grid grid-cols-2 gap-px bg-border border border-border">
              <div className="bg-card p-4">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  Resposta
                </div>
                <div className="font-mono text-2xl font-bold tabular-nums mt-1">{"<15min"}</div>
              </div>
              <div className="bg-card p-4">
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  Início
                </div>
                <div className="font-mono text-2xl font-bold tabular-nums mt-1">48h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
