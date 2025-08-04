import type React from 'react';
import { useState } from 'react';
import Icon from '../../../assets/icons/Icon';
import Button from '../../../components/Button';
import styles from './HeroTestimonialCarousel.module.css';

interface Testimonial {
  customerName: string;
  customerQuote: string;
  customerImage: string | null;
}

const testimonials: Testimonial[] = [
  {
    customerName: 'Sandra S.',
    customerQuote:
      'Manuel and Angel did a fabulous job. I was really happy with their work and attention to detail. They also explained their process very well. I was very pleased and would recommend your company to anyone who asks.',
    customerImage: null,
  },
  {
    customerName: 'Rachel P.',
    customerQuote:
      'Angel & Sergio did a fantastic job with my AC unit today! They explained everything so I could understand well. They were honest on the freon refill, and that really matters these days. Will use the company again!',
    customerImage: null,
  },
  {
    customerName: 'Diana A.',
    customerQuote:
      'Technicians Sami and Angel were professional and very courteous. They did a thorough inspection of my HVAC unit. They explained what they were going to do, did it and cleaned up after themselves. I was shown pictures of what they did. I appreciate their time, explanation and the detail they went into. Recommend Honeycomb Heating and Cooling.',
    customerImage: null,
  },
  {
    customerName: 'Lindsay G.',
    customerQuote:
      'The entire crew was amazing—from initial inspection to installation! Everyone was so kind, hardworking, respectful, and professional. They quickly got our new AC up and running and helped balance the ducting so each room receives equal airflow. Im so happy a friend referred this company to me. They were wonderful and very fair priced!',
    customerImage: null,
  },
];

const HeroTestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const currentTestimonial = testimonials[currentIndex];

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
        <p className={`${styles['testimonial-quote']}`}>{currentTestimonial.customerQuote}</p>
        <div className={styles['testimonial-customer']}>
          <div className={styles['customer-header']}>
            {currentTestimonial.customerImage ? (
              <img
                src={currentTestimonial.customerImage}
                alt={currentTestimonial.customerName}
                className={styles['customer-image']}
              />
            ) : (
              <div className={styles['customer-initials']}>
                {getInitials(currentTestimonial.customerName)}
              </div>
            )}
          </div>
          <span className={`${styles['customer-name']}`}>
            {currentTestimonial.customerName}, Customer
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
