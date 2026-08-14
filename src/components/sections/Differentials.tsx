import { Zap, Rocket, Code2, MessageSquare, Handshake, EyeOff } from "lucide-react";

const items = [
  { icon: Zap, code: "DIF_01", title: "Resposta rápida", desc: "SLA de até 15 minutos em horário comercial. Você nunca fica no escuro." },
  { icon: Rocket, code: "DIF_02", title: "Entregas ágeis", desc: "Ciclos curtos e priorização contínua. O que é urgente entra na frente." },
  { icon: Code2, code: "DIF_03", title: "Stack moderna", desc: "React, Next.js, Node, Python, AWS. Código limpo, escalável e auditável." },
  { icon: MessageSquare, code: "DIF_04", title: "Comunicação direta", desc: "Sem burocracia, sem ticket frio. Canal direto com quem executa." },
  { icon: Handshake, code: "DIF_05", title: "Foco em parceria", desc: "A gente pensa junto, sugere caminhos. Não somos só execução." },
  { icon: EyeOff, code: "DIF_06", title: "White-label", desc: "Você vende como se fosse seu time. A gente fica nos bastidores." },
];

export const Differentials = () => {
  return (
    <section id="diferenciais" className="relative border-b border-border bg-card overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative px-6 md:px-10 lg:px-16 py-20 lg:py-28 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-accent mb-6 uppercase tracking-widest">
            // Diferenciais_ 03
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1] text-balance">
            Por que escolher a <span className="text-muted-foreground">ArrobaCode?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.code}
                className="bg-background p-8 flex flex-col gap-5 group hover:bg-card transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                    <Icon className="w-4 h-4 group-hover:text-accent transition-colors" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                    [{item.code}]
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
