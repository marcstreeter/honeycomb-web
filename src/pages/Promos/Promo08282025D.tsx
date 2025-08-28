import PromotionalPage from '@components/PromotionalPage';
import { guaranteeSection, heroSection, reviewsSection, whySection, stackSection } from './PromoDefaultSections';
import checkingUnitImg from '@images/img-checking-unit.webp';

const PromotionalSample = () => {
  const expirationTime = new Date('2025-09-29T22:59:59');
  const timerSection = { expirationTime };
  const customHeroSection = {
    ...heroSection,
    backgroundImage: checkingUnitImg,
    mainText: 'Small Monthly Payments',
    subText: 'No interest and No payments for 6 months upon approval and then a small monthly payment on all new full system installs.',
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
