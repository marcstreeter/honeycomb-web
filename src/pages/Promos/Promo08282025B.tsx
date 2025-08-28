import PromotionalPage from '@components/PromotionalPage';
import { heroSection, guaranteeSection, reviewsSection } from './PromoDefaultSections';

const PromotionalSample = () => {
  const expirationTime = new Date('2025-08-29T22:59:59');
  const timerSection = { expirationTime };
  const customHeroSection = {
    ...heroSection,
    mainText: 'Free IAQ',
    subText: 'Purchase a new system before the end of the year and get an Indoor Air Quality product for free.',
  };
  return (
    <PromotionalPage
      heroSection={customHeroSection}
      guaranteeSection={guaranteeSection}
      reviewsSection={reviewsSection}
      timerSection={timerSection}
    />
  );
};

export default PromotionalSample;
