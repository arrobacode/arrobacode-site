import { AlertTriangle } from "lucide-react";

const pains = [
  { code: "ERR_01", text: "Freelancers que somem ou atrasam" },
  { code: "ERR_02", text: "Projetos travados por falta de dev" },
  { code: "ERR_03", text: "Dificuldade pra escalar demanda" },
  { code: "ERR_04", text: "Cliente cobrando e você sem resposta" },
  { code: "ERR_05", text: "Custo alto pra contratar dev fixo" },
];

export const Pain = () => {
  return (
    <section id="dor" className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative px-6 md:px-10 lg:px-16 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="font-mono text-xs text-muted-foreground mb-6 uppercase tracking-widest flex items-center gap-3">
          <AlertTriangle className="w-3.5 h-3.5 text-destructive" />
          <span>// Diagnóstico_ 01</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1] text-balance max-w-4xl">
          Se você tem uma agência, <span className="text-muted-foreground">já passou por isso:</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {pains.map((p) => (
            <div
              key={p.code}
              className="bg-background p-8 flex flex-col gap-4 group hover:bg-card transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-destructive tracking-widest uppercase">
                  [{p.code}]
                </span>
                <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                  Crítico
                </span>
              </div>
              <p className="text-lg md:text-xl font-semibold tracking-tight leading-snug">
                {p.text}
              </p>
              <div className="mt-auto pt-4 border-t border-border">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  → Bloqueia escala
                </span>
              </div>
            </div>
          ))}
          <div className="bg-foreground text-background p-8 flex flex-col justify-between">
            <span className="font-mono text-[10px] tracking-widest uppercase opacity-60">
              [ DIAGNÓSTICO ]
            </span>
            <p className="text-lg md:text-xl font-bold tracking-tight leading-snug">
              Isso não é falta de cliente. É falta de estrutura técnica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
