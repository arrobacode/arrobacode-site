import { useEffect } from "react";

const palettes = [
  // Gradiente original do SVG na seção principal.
  { id: "top", start: [76, 140, 253], end: [14, 181, 239] },
  { id: "dor", start: [251, 142, 20], end: [248, 53, 13] },
  { id: "solucao", start: [6, 229, 196], end: [96, 241, 172] },
  { id: "diferenciais", start: [250, 203, 28], end: [163, 228, 45] },
  { id: "manifesto", start: [144, 80, 222], end: [97, 143, 251] },
  { id: "contato", start: [217, 70, 239], end: [124, 58, 237] },
] as const;

export const useLogoGradient = () => {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const updateGradient = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.45;
      const sections = palettes.filter((palette) => document.getElementById(palette.id));

      if (!sections.length) return;

      const active =
        [...sections].reverse().find((palette) => {
          const element = document.getElementById(palette.id);
          return element ? marker >= element.offsetTop : false;
        }) ?? sections[0];

      root.style.setProperty("--logo-gradient-start", active.start.join(" "));
      root.style.setProperty("--logo-gradient-end", active.end.join(" "));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateGradient);
    };

    updateGradient();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
};
