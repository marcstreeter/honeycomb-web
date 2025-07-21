import type React from 'react';

import Button from '../../components/Button';

// If you use Button or other shared components, import from @components/Button

const TestimonialsSection: React.FC = () => (
  <section className="testimonials">
    <div className="container">
      <h2>WHAT OUR CUSTOMERS SAY</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <div className="google-logo">Google</div>
          <p>"Excellent service! The team was professional and got our AC working quickly."</p>
          <span className="customer-name">JAMES GREEN</span>
        </div>
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <div className="google-logo">Google</div>
          <p>"Very reliable and honest pricing. Highly recommend their services."</p>
          <span className="customer-name">LILY JONES</span>
        </div>
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>
          <div className="google-logo">Google</div>
          <p>"Great experience from start to finish. Will definitely use them again."</p>
          <span className="customer-name">SMRV</span>
        </div>
      </div>
      <div className="review-buttons">
        <Button>Read Reviews</Button>
        <Button>Leave a Review</Button>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
