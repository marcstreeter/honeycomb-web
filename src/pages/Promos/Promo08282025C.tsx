import PromotionalPage from '@components/PromotionalPage';
import { heroSection, reviewsSection } from './PromoDefaultSections';
import checkingUnitImg from '@images/img-checking-unit.webp';

const PromotionalSample = () => {
  const expirationTime = new Date('2025-08-29T22:59:59');
  const timerSection = { expirationTime };
  const customHeroSection = {
    ...heroSection,
    backgroundImage: checkingUnitImg,
    mainText: 'Join the Comfy Club',
    subText: 'Sign up for our maintenance program for 2 years and get a smart thermostat for free (valued at $500)',
  };
  return (
    <PromotionalPage
      heroSection={customHeroSection}
      reviewsSection={reviewsSection}
      timerSection={timerSection}
    />
  );
};

export default PromotionalSample;
