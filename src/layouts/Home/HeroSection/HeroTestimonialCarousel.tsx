import type React from 'react';
import ChevronIcon from '../../../assets/icons/ChevronIcon';
import Button from '../../../components/Button';
import styles from './HeroTestimonialCarousel.module.css';

const HeroTestimonialCarousel: React.FC = () => (
  <div className={`${styles['hero-testimonial-carousel']}`}>
    <Button
      className={`${styles['carousel-chevron']} ${styles.left}`}
      icon={<ChevronIcon style={{ transform: 'rotate(180deg)' }} />}
      aria-label="Previous testimonial"
    />
    <div className={`${styles['testimonial-content']}`}>
      <p className={`${styles['testimonial-quote']}`}>
        "Friendly, clean and professional! Angel & Manuel were great! They came out right away and
        made everything right for me!"
      </p>
      <span className={`${styles['testimonial-customer']}`}>- Tracy G., Customer</span>
    </div>
    <Button
      className={`${styles['carousel-chevron']} ${styles.right}`}
      icon={<ChevronIcon />}
      aria-label="Next testimonial"
    />
  </div>
);

export default HeroTestimonialCarousel;
