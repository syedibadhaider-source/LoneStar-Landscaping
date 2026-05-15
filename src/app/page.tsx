import { AboutSection } from "@/components/site/AboutSection";
import { ChatWidget } from "@/components/site/ChatWidget";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { GalleryPreview } from "@/components/site/GalleryPreview";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { PropertyTypes } from "@/components/site/PropertyTypes";
import { QuoteSection } from "@/components/site/QuoteSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { WhyChooseSection } from "@/components/site/WhyChooseSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <PropertyTypes />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseSection />
      <GalleryPreview />
      <CtaBanner />
      <QuoteSection />
      <Footer />
      <ChatWidget />
    </main>
  );
}
