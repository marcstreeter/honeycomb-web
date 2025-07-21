import type React from 'react';
import HeroImage from '../../../assets/images/img-video-placeholder.webp';
import Image from '../components/Image';
import GoogleReviewBadge from './GoogleReviewBadge';
import HeroButtons from './HeroButtons';
import HeroHeadline from './HeroHeadline';
import HeroMission from './HeroMission';
import styles from './HeroSection.module.css';
import HeroTestimonialCarousel from './HeroTestimonialCarousel';

const HeroSection: React.FC = () => (
  <section className={`${styles.hero}`}>
    <div className={`${styles.container}`}>
      <div className={`${styles['hero-content-grid']}`}>
        <GoogleReviewBadge />
        <HeroHeadline />
        <HeroMission />
        <HeroButtons />
        <HeroTestimonialCarousel />
      </div>
      <div className={`${styles['hero-image']}`}>
        <Image
          src={HeroImage}
          alt="Technicians in van"
          className={`${styles['hero-img']}`}
          dimensionX={650}
          dimensionY={500}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
