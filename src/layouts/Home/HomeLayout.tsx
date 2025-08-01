import type React from 'react';
import AboutSection from './AboutSection';
import ComfortGuarantee from './ComfortGuarantee';
import ComfyClub from './ComfyClub';
import BottomCTASection from './CTASection';
import DiscountsSection from './DiscountsSection';
import HeroSection from './HeroSection';
// import KeyDifferentiators from './KeyDifferentiators';
import ServiceAreasSection from './ServiceAreasSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';

const HomeLayout: React.FC = () => (
  <>
    <div className="sections-wrapper-grid">
      <HeroSection />
      {/* <KeyDifferentiators /> */}
      <ServicesSection />
    </div>
    <ComfortGuarantee />
    <ComfyClub />
    <TestimonialsSection />
    <AboutSection />
    <DiscountsSection />
    <ServiceAreasSection />
    <BottomCTASection />
  </>
);

export default HomeLayout;
