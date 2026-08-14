import { BrandLogo } from "@/components/BrandLogo";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="px-6 md:px-10 lg:px-16 py-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <BrandLogo className="w-44 sm:w-52" />
        <div className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-8 md:justify-end">
          <span>:: Time técnico sob demanda</span>
          <span>:: White-label para agências</span>
          <span>© {new Date().getFullYear()} ArrobaCode</span>
        </div>
      </div>
    </footer>
  );
};
