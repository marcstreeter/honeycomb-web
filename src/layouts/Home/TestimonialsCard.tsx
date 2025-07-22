import type React from 'react';
import TestimonialLogo, { type LogoKey } from './TestimonialLogo';
import TestimonialStars from './TestimonialStarRating';
import styles from './TestimonialsCard.module.css';
import CustomerInfo from './TestimonialsCustomerInfo';

interface TestimonialCardProps {
  stars?: number;
  logo?: LogoKey;
  quote: string;
  customerName: string;
  customerTitle?: string;
  customerImage?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  stars = 5,
  logo = 'google',
  quote,
  customerName,
  customerTitle = 'Customer',
  customerImage,
}) => (
  <div className={styles['testimonial-card']}>
    <div className={styles['card-header']}>
      <TestimonialStars stars={stars} />
      <div className={styles['review-logo']}>{logo && <TestimonialLogo logoKey={logo} />}</div>
    </div>
    <p className={styles.quote}>{`"${quote}"`}</p>
    <CustomerInfo name={customerName} title={customerTitle} image={customerImage} />
  </div>
);

export default TestimonialCard;
