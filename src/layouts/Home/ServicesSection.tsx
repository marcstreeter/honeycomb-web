import type React from 'react';
// If you use Button or other shared components, import from @components/Button
import ServiceAC from '../../assets/images/img-air-conditioning-repair.webp';
import ServiceIAQ from '../../assets/images/img-changing-filter.webp';
import ServiceHeat from '../../assets/images/img-repairing-heater.webp';
import Image from './components/Image';
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
          <Image
            src={ServiceAC}
            alt="AC Technician"
            aspectRatio={1}
            overlay={{
              text: <h3>AIR CONDITIONING</h3>,
              position: 'bottom',
            }}
            gradientOverlay={{
              enabled: true,
              color: 'var(--color-black)',
              opacity: 0.5,
              direction: 'bottom',
            }}
          />
        </div>
        <div className={`${styles['service-card']}`}>
          <Image
            src={ServiceHeat}
            alt="Heating Technician"
            aspectRatio={1}
            overlay={{
              text: <h3>HEATING</h3>,
              position: 'bottom',
            }}
            gradientOverlay={{
              enabled: true,
              color: 'var(--color-black)',
              opacity: 0.5,
              direction: 'bottom',
            }}
          />
        </div>
        <div className={`${styles['service-card']}`}>
          <Image
            src={ServiceIAQ}
            alt="Air Quality Technician"
            aspectRatio={1}
            overlay={{
              text: <h3>AIR QUALITY</h3>,
              position: 'bottom',
            }}
            gradientOverlay={{
              enabled: true,
              color: 'var(--color-black)',
              opacity: 0.5,
              direction: 'bottom',
            }}
          />
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
