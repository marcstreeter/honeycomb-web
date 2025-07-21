import type React from 'react';
import Button from '../../components/Button';
import styles from './AboutSection.module.css';
import Image from './components/Image';

const AboutSection: React.FC = () => (
  <section className={`${styles.about}`}>
    <div className={`${styles.container}`}>
      <div className={`${styles['about-content']}`}>
        <h2>ABOUT HONEYCOMB HEATING & COOLING</h2>
        <p>
          We are committed to providing the highest quality HVAC services with integrity, honesty,
          and dedication to customer satisfaction. Our team of certified technicians ensures that
          every job is completed to the highest standards.
        </p>
        <div className={`${styles['about-points']}`}>
          <div className={`${styles.point}`}>20+ YEARS OF EXPERIENCE</div>
          <div className={`${styles.point}`}>TAILORED SOLUTIONS</div>
          <div className={`${styles.point}`}>WE CARE FOR OUR COMMUNITY</div>
        </div>
        <Button>More About Us</Button>
      </div>
      <Image>Technicians Walking</Image>
    </div>
  </section>
);

export default AboutSection;
