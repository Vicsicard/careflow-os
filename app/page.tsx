import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ProblemSection from '@/components/ProblemSection';
import FeatureGrid from '@/components/FeatureGrid';
import HowItWorks from '@/components/HowItWorks';
import BenefitsSection from '@/components/BenefitsSection';
import DashboardPreview from '@/components/DashboardPreview';
import TestimonialSection from '@/components/TestimonialSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <FeatureGrid />
      <HowItWorks />
      <BenefitsSection />
      <DashboardPreview />
      <TestimonialSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
