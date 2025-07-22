import type React from 'react';

import Button from '../../components/Button';
import TestimonialsCard from './TestimonialsCard';
import styles from './TestimonialsSection.module.css';

const TestimonialsSection: React.FC = () => (
  <section className={styles.testimonials}>
    <div className="container">
      <h2
        style={{
          textTransform: 'uppercase',
          color: 'var(--color-black)',
          textAlign: 'center',
          fontSize: '5rem',
          fontWeight: 'bold',
          marginBottom: '40px',
        }}
      >
        What our customers say
      </h2>
      <div className="testimonials-grid">
        <TestimonialsCard
          stars={5}
          logo="google"
          quote="Excellent service! The team was professional and got our AC working quickly."
          customerName="James Smith"
        />
        <TestimonialsCard
          stars={5}
          logo="google"
          quote="Very reliable and honest pricing. Highly recommend their services. Man I thought I was going to be stuck in the heat all day. But it was fixed in no time. And really affordable."
          customerName="Lily Jones"
        />
        <TestimonialsCard
          stars={5}
          logo="facebook"
          quote="Great experience from start to finish. Will definitely use them again."
          customerName="Sam V."
        />
      </div>
      <div className="review-buttons">
        <Button bgColor="var(--color-blue)" text="Read Reviews" textColor="var(--color-white)" />
        <Button bgColor="var(--color-black)" text="Leave a Review" textColor="var(--color-white)" />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
