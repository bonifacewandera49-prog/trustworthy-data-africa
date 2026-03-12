import ParticleBackground from '@/components/ParticleBackground';
import SiteNavigation from '@/components/SiteNavigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ToolsSection from '@/components/ToolsSection';
import ResearchSection from '@/components/ResearchSection';
import SectorsSection from '@/components/SectorsSection';
import ContactSection from '@/components/ContactSection';
import SiteFooter from '@/components/SiteFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <SiteNavigation />
      <HeroSection />
      <AboutSection />
      <ToolsSection />
      <ResearchSection />
      <SectorsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
