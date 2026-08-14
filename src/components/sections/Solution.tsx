import { Check } from "lucide-react";

const services = [
  { label: "Sites e landing pages", spec: "MOD_WEB" },
  { label: "Sistemas e SaaS", spec: "MOD_APP" },
  { label: "Apps mobile", spec: "MOD_MOB" },
  { label: "Integrações e automações", spec: "MOD_API" },
  { label: "Ajustes e melhorias", spec: "MOD_FIX" },
  { label: "Manutenção contínua", spec: "MOD_OPS" },
];

export const Solution = () => {
  return (
    <section id="solucao" className="relative border-b border-border bg-card overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative px-6 md:px-10 lg:px-16 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs text-accent mb-6 uppercase tracking-widest">
              // Solução_ 02
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1] text-balance">
              A ArrobaCode resolve isso pra você.
            </h2>
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
              Você não precisa contratar, nem depender de freelancer.
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Com a ArrobaCode, você tem acesso a um time técnico sob demanda, com horas mensais que
              você usa conforme a necessidade.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-4 py-2 bg-background">
              <span className="w-1.5 h-1.5 bg-accent animate-pulse-dot" />
              Operação white-label
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-border bg-background">
              <div className="px-6 py-4 border-b border-border flex justify-between items-center">
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                  Capacidades operacionais
                </span>
                <span className="font-mono text-[10px] text-foreground tracking-widest uppercase">
                  06 / MÓDULOS
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
                {services.map((s) => (
                  <div
                    key={s.spec}
                    className="bg-background p-6 flex items-start gap-4 group hover:bg-card transition-colors"
                  >
                    <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                      <Check className="w-4 h-4 group-hover:text-accent transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base tracking-tight">{s.label}</p>
                      <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mt-1 block">
                        :: {s.spec}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
