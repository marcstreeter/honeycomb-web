import type React from 'react';
import Icon from '../../../assets/icons/Icon';
import Button from '../../../components/Button';
import styles from './HeroTestimonialCarousel.module.css';

const HeroTestimonialCarousel: React.FC = () => (
  <div className={`${styles['hero-testimonial-carousel']}`}>
    <Button
      bgColor="var(--color-yellow)"
      icon={<Icon iconKey="chevron-left" fill="var(--color-black)" width={20} height={20} />}
      aria-label="Previous testimonial"
      className={styles['carousel-button']}
    />
    <div className={`${styles['testimonial-content']}`}>
      <p className={`${styles['testimonial-quote']}`}>
        Friendly, clean and professional! Angel & Manuel were great! They came out right away and
        made everything right for me!
      </p>
      <span className={`${styles['testimonial-customer']}`}>- Tracy G., Customer</span>
    </div>
    <Button
      bgColor="var(--color-yellow)"
      icon={
        <Icon
          iconKey="chevron-right"
          fill="var(--color-black)"
          width={20}
          height={20}
          viewBoxX={500}
        />
      }
      aria-label="Next testimonial"
      className={styles['carousel-button']}
    />
  </div>
);

export default HeroTestimonialCarousel;
