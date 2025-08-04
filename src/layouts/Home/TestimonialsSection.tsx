import type React from 'react';

import Button from '../../components/Button';
import { reviews } from '../../data/reviews';
import TestimonialsCard from './TestimonialsCard';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection: React.FC = () => (
  <section className={styles.testimonials}>
    <div className="container">
      <h2
        style={{
          color: 'var(--color-black)',
          textAlign: 'center',
        }}
      >
        What our customers say
      </h2>
      <div className={styles['testimonials-grid']}>
        {reviews.slice(0, 3).map((review, _) => (
          <TestimonialsCard
            key={review.id}
            quote={review.quote}
            customerName={review.customerName}
          />
        ))}
      </div>
      <div className={styles['review-buttons']}>
        <Button
          href={
            'https://www.google.com/maps/place/Honeycomb+Heating+and+Cooling/@29.5082921,-98.8246924,10z/data=!4m2!3m1!1s0xfb58f97ead6bf09:0x8687c2c1a8b81ae8#lrd=0xfb58f97ead6bf09:0x8687c2c1a8b81ae8,1'
          }
          bgColor="var(--color-blue)"
          text="Read Reviews"
          textColor="var(--color-white)"
        />
        <Button
          href={
            'https://www.google.com/maps/place/Honeycomb+Heating+and+Cooling/@29.5082921,-98.8246924,10z/data=!4m2!3m1!1s0xfb58f97ead6bf09:0x8687c2c1a8b81ae8#lrd=0xfb58f97ead6bf09:0x8687c2c1a8b81ae8,1'
          }
          bgColor="var(--color-black)"
          text="Leave a Review"
          textColor="var(--color-white)"
        />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
