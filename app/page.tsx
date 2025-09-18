import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ProblemSection } from '@/components/sections/problem-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ImpactSection } from '@/components/sections/impact-section';
import { RoadmapSection } from '@/components/sections/roadmap-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <ImpactSection />
      <RoadmapSection />
      <ContactSection />
      <Footer />
    </main>
  );
}