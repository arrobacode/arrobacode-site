import { ArrowUpRight, Check, MoveRight } from "lucide-react";
import pegueSeuLinkMockup from "@/assets/pegue-seu-link-case.png";

const highlights = [
  "Vitrine responsiva para afiliados",
  "Produtos de vários marketplaces",
  "Analytics de cliques e interesse",
];

export const Cases = () => {
  return (
    <section id="cases" aria-labelledby="cases-title" className="relative overflow-hidden border-b border-border bg-card">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />

      <div className="relative flex items-center justify-between border-b border-border px-6 py-4 md:px-10 lg:px-16">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-accent md:text-xs">
          <span className="h-2 w-2 animate-pulse-dot bg-accent" />
          Cases em produção
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          01 / 01
        </span>
      </div>

      <div className="relative px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              // Trabalho que saiu do código e ganhou o mundo
            </p>
            <h2 id="cases-title" className="max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Ideias que viram <span className="text-accent">produto.</span>
            </h2>
          </div>
          <p className="max-w-lg text-base font-medium leading-relaxed text-muted-foreground lg:col-span-4 lg:justify-self-end lg:text-lg">
            Estratégia, design e tecnologia trabalhando juntos para entregar experiências digitais que as pessoas realmente usam.
          </p>
        </div>

        <article className="group relative border border-border bg-background">
          <span className="absolute -left-px -top-px z-20 border border-accent bg-accent px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent-foreground">
            Case 01 — Destaque
          </span>

          <div className="grid lg:grid-cols-12">
            <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-white lg:col-span-7 lg:aspect-auto lg:min-h-[650px] lg:border-b-0 lg:border-r">
              <img
                src={pegueSeuLinkMockup}
                alt="Pegue Seu Link exibido em notebook e celular, com vitrine de produtos e painel de métricas"
                className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-3 border border-white/20 bg-black/70 px-4 py-2 font-mono text-[10px] uppercase tracking-widest backdrop-blur-md">
                <span className="h-1.5 w-1.5 bg-accent" />
                SaaS / Vitrine de afiliados
              </div>
            </div>

            <div className="flex flex-col p-7 md:p-10 lg:col-span-5 lg:p-12 xl:p-14">
              <div className="mb-12 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>PSL_001</span>
                <span className="text-accent">Deploy concluído</span>
              </div>

              <h3 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl">
                Pegue Seu <span className="text-accent">Link</span>
              </h3>
              <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                Uma plataforma criada para afiliados organizarem produtos de vários marketplaces em uma única vitrine, compartilharem suas ofertas com facilidade e acompanharem o interesse da audiência sem depender de planilhas.
              </p>

              <div className="my-10 h-px bg-border" />

              <div className="space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-4 font-mono text-xs uppercase tracking-wider text-foreground/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-accent/50 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <a href="https://www.pegueseulink.com.br/" target="_blank" rel="noreferrer" className="group/link flex w-full items-center justify-between border border-foreground bg-foreground px-5 py-5 font-mono text-xs font-bold uppercase tracking-widest text-background transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground">
                  <span>Conhecer o projeto</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 overflow-hidden border-t border-border bg-card px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="shrink-0 text-accent">Do conceito ao deploy</span>
            <MoveRight className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">Estratégia · UX/UI · Desenvolvimento · Performance</span>
          </div>
        </article>
      </div>
    </section>
  );
};
