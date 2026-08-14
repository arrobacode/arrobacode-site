export const Manifesto = () => {
  return (
    <section id="manifesto" className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

      <div className="relative px-6 md:px-10 lg:px-16 py-24 lg:py-36 max-w-6xl mx-auto">
        <div className="font-mono text-xs text-accent mb-10 uppercase tracking-widest flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-accent animate-pulse-dot" />
          // Posicionamento_ 04
        </div>

        <blockquote className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-tighter leading-[0.95] text-balance">
          <span className="text-muted-foreground">Você não precisa de mais um</span>{" "}
          <span className="line-through decoration-destructive decoration-[4px] underline-offset-4">
            freelancer
          </span>
          .
          <br />
          <span className="text-foreground">
            Precisa de um parceiro técnico confiável.
          </span>
        </blockquote>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
          <span className="border border-border px-4 py-2 bg-card">:: ArrobaCode / Manifesto v1.0</span>
          <span>// Assinado por todos os engenheiros da frota</span>
        </div>
      </div>
    </section>
  );
};
