import { AboutSection } from "@/components/site/AboutSection";
import { ChatWidget } from "@/components/site/ChatWidget";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { FaqSection } from "@/components/site/FaqSection";
import { GalleryPreview } from "@/components/site/GalleryPreview";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { InsightsSection } from "@/components/site/InsightsSection";
import { PropertyTypes } from "@/components/site/PropertyTypes";
import { QuoteSection } from "@/components/site/QuoteSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { WhyChooseSection } from "@/components/site/WhyChooseSection";
import { TeamSection } from "@/components/ui/team";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <PropertyTypes />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <TeamSection />
      <IndustriesSection />
      <GalleryPreview />
      <CtaBanner />
      <FaqSection />
      <InsightsSection />
      <QuoteSection />
      <Footer />
      <ChatWidget />
    </main>
  );
}
