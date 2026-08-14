import { BrandLogo } from "@/components/BrandLogo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center gap-4 px-4 sm:px-6 md:px-10 py-3 md:py-4">
        <a href="#top" className="shrink-0" aria-label="ArrobaCode — início">
          <BrandLogo className="w-36 sm:w-44 md:w-52" />
        </a>
        <div className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase flex items-center gap-3 border border-border px-3 py-1.5 bg-card">
          <div className="w-1.5 h-1.5 bg-accent animate-pulse-dot" />
          <span className="hidden sm:inline">[ STATUS:&nbsp;</span>
          <span>CAPACIDADE LIMITADA</span>
          <span className="hidden sm:inline">&nbsp;]</span>
        </div>
      </div>
    </header>
  );
};
