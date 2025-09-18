import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ServicesHero } from '@/components/services/services-hero';
import { MappingService } from '@/components/services/mapping-service';
import { AnalysisService } from '@/components/services/analysis-service';
import { ManagementService } from '@/components/services/management-service';
import { ServicesCTA } from '@/components/services/services-cta';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <MappingService />
      <AnalysisService />
      <ManagementService />
      <ServicesCTA />
      <Footer />
    </main>
  );
}