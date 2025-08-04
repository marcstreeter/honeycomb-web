import type React from 'react';
import { useState } from 'react';
import Icon from '../../../assets/icons/Icon';
import Button from '../../../components/Button';
import { reviews } from '../../../data/reviews';
import styles from './HeroTestimonialCarousel.module.css';

const HeroTestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const currentReview = reviews[currentIndex];

  // Generate initials from customer name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  return (
    <div className={`${styles['hero-testimonial-carousel']}`}>
      <Button
        bgColor="var(--color-yellow)"
        icon={<Icon iconKey="chevron-left" fill="var(--color-black)" width={20} height={20} />}
        aria-label="Previous testimonial"
        className={styles['carousel-button']}
        onClick={goToPrevious}
      />
      <div className={`${styles['testimonial-content']}`}>
        <p className={`${styles['testimonial-quote']}`}>{currentReview.quote}</p>
        <div className={styles['testimonial-customer']}>
          <div className={styles['customer-header']}>
            {currentReview.customerImage ? (
              <img
                src={currentReview.customerImage}
                alt={currentReview.customerName}
                className={styles['customer-image']}
              />
            ) : (
              <div className={styles['customer-initials']}>
                {getInitials(currentReview.customerName)}
              </div>
            )}
          </div>
          <span className={`${styles['customer-name']}`}>
            {currentReview.customerName}, {currentReview.customerTitle || 'Customer'}
          </span>
        </div>
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
        onClick={goToNext}
      />
    </div>
  );
};

export default HeroTestimonialCarousel;
