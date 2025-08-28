import PromotionalPage from '@components/PromotionalPage';
import { guaranteeSection, heroSection, whySection } from './PromoDefaultSections';
import airConditionerImg from '@images/img-air-conditioning-repair.webp';

const PromotionalSample = () => {
  const customHeroSection = {
    ...heroSection,
    backgroundImage: airConditionerImg,
    mainText: 'Free Filters!',
    subText: 'Free Filters for Life! Purchase a new system and get free filters for the life of the system.',
  };
  return (
    <PromotionalPage
      heroSection={customHeroSection}
      whySection={whySection}
      guaranteeSection={guaranteeSection}
    />
  );
};

export default PromotionalSample;
