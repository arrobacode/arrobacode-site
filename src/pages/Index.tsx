import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { Solution } from "@/components/sections/Solution";
import { Differentials } from "@/components/sections/Differentials";
import { Manifesto } from "@/components/sections/Manifesto";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useLogoGradient } from "@/hooks/use-logo-gradient";

const Index = () => {
  useLogoGradient();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <Differentials />
        <Manifesto />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
