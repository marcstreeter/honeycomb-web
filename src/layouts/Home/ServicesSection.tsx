import type React from 'react';
// If you use Button or other shared components, import from @components/Button
import ServiceAC from '../../assets/images/checking-unit.webp';
import ServiceHeat from '../../assets/images/discussing-job.webp';
import ServiceIAQ from '../../assets/images/testimonial-head-shot-b.webp';
import styles from './ServicesSection.module.css';

const ServicesSection: React.FC = () => (
  <section className={`${styles.services}`}>
    <div className={`${styles.container}`}>
      <h2>OUR SERVICES</h2>
      <p>
        Whether you need new installations, repairs to reliable units, or thorough maintenance,
        we've got you covered.
      </p>
      <div className={`${styles['services-grid']}`}>
        <div className={`${styles['service-card']}`}>
          <div className={`${styles['service-image']}`}>
            <img src={ServiceAC} alt="AC Technician" />
          </div>
          <h3>AIR CONDITIONING</h3>
        </div>
        <div className={`${styles['service-card']}`}>
          <div className={`${styles['service-image']}`}>
            <img src={ServiceHeat} alt="Heating Technician" />
          </div>
          <h3>HEATING</h3>
        </div>
        <div className={`${styles['service-card']}`}>
          <div className={`${styles['service-image']}`}>
            <img src={ServiceIAQ} alt="Air Quality Technician" />
          </div>
          <h3>AIR QUALITY</h3>
        </div>
      </div>
      <div className={`${styles['carousel-dots']}`}>
        <span className={`${styles.dot} ${styles.active}`}></span>
        <span className={`${styles.dot}`}></span>
        <span className={`${styles.dot}`}></span>
      </div>
    </div>
  </section>
);

export default ServicesSection;
