import PromotionalPage from '@components/PromotionalPage';
import { heroSection, whySection, guaranteeSection, stackSection, reviewsSection } from './PromoDefaultSections';

const PromotionalSample = () => {
  const expirationTime = new Date('2025-08-29T22:59:59');
  const timerSection = { expirationTime };
  const customHeroSection = {
    ...heroSection,
    subText: 'Switch to a new high efficiency system and we will guarantee $1,000 in savings on your power bill in the first year or we will pay you that $1,000 guaranteed. All systems over ten years old qualify. ',
  };
  return (
    <PromotionalPage
      heroSection={customHeroSection}
      whySection={whySection}
      guaranteeSection={guaranteeSection}
      stackSection={stackSection}
      reviewsSection={reviewsSection}
      timerSection={timerSection}
    />
  );
};

export default PromotionalSample;
