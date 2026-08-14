import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative grid grid-cols-1 lg:grid-cols-12">
        {/* Left — copy */}
        <div className="lg:col-span-8 lg:border-r border-border px-6 md:px-10 lg:px-16 py-20 lg:py-28 relative">
          <div className="absolute top-6 left-6 w-3 h-3 border-l border-t border-foreground/40" />
          <div className="absolute bottom-6 left-6 w-3 h-3 border-l border-b border-foreground/40" />

          <div className="font-mono text-xs text-muted-foreground mb-8 uppercase tracking-widest">
            // Módulo de Expansão_ v2.4
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-tighter leading-[0.95] text-balance">
            Seu time de desenvolvimento{" "}
            <span className="text-muted-foreground">sob demanda</span> para escalar sua agência.
          </h1>

          <p className="mt-10 text-base md:text-lg lg:text-xl text-muted-foreground max-w-[55ch] font-medium leading-relaxed">
            Pare de depender de freelancers e atrasos. Tenha um parceiro técnico com horas mensais
            fixas, entrega rápida e previsibilidade de custo.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#contato"
              className="group inline-flex items-center gap-4 bg-foreground text-background px-7 py-5 font-mono font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
            >
              <span>Quero entender como funciona</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest flex flex-col gap-1">
              <span>:: Ideal para agências</span>
              <span>:: Sem contratar dev interno</span>
            </div>
          </div>
        </div>

        {/* Right — telemetry */}
        <div className="lg:col-span-4 bg-card flex flex-col border-t lg:border-t-0 border-border">
          <div className="px-6 py-5 border-b border-border flex justify-between items-center">
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              Telemetria
            </span>
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
              Online
            </span>
          </div>

          <div className="flex-1 p-8 lg:p-10 flex flex-col gap-10">
            <div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                Carga atual da frota
              </div>
              <div className="text-4xl font-mono font-bold tabular-nums">92.4%</div>
              <div className="w-full h-1 bg-secondary mt-3">
                <div className="h-full bg-foreground w-[92%]" />
              </div>
            </div>

            <div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
                Stack operacional
              </div>
              <div className="grid grid-cols-2 gap-px bg-border border border-border">
                {["REACT", "NODE.JS", "PYTHON", "AWS", "NEXT.JS", "POSTGRES", "TYPESCRIPT", "DOCKER"].map(
                  (t) => (
                    <div
                      key={t}
                      className="bg-card p-3 font-mono text-xs text-foreground/80 flex justify-between"
                    >
                      <span>{t}</span>
                      <span className="text-muted-foreground">[+]</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="mt-auto">
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-4 flex justify-between">
                <span>Alocação de threads</span>
                <span>32/32 ATIVAS</span>
              </div>
              <div className="grid grid-cols-8 gap-1.5">
                {Array.from({ length: 24 }).map((_, i) => {
                  const dim = [5, 9, 14, 18, 22].includes(i);
                  return (
                    <div
                      key={i}
                      className={`aspect-square ${dim ? "animate-thread-dim" : "animate-thread"}`}
                      style={{ animationDelay: `${(i % 8) * 0.12 + Math.floor(i / 8) * 0.2}s` }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-t border-border bg-card py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-8 px-4">
              {[
                "SEQ_ID: 0x8F9B2A",
                "LATÊNCIA_REDE: 14MS",
                "PROTOCOL: ENCRYPTED_TUNNEL",
                "AGÊNCIAS_ATIVAS: 12",
                "HORAS_ENTREGUES: 2.480",
                "SLA_RESPOSTA: < 15MIN",
                "WHITE_LABEL: ATIVO",
              ].map((t) => (
                <div key={t} className="flex items-center gap-8">
                  <span>{t}</span>
                  <span className="w-px h-3 bg-border" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
