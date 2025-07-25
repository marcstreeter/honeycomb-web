import type React from 'react';
import Icon from '../../assets/icons/Icon';
import DiscussingJobImage from '../../assets/images/img-discussing-job.webp';
import Button from '../../components/Button';
import AboutPoint from './AboutPoint';
import styles from './AboutSection.module.css';
import Image from './components/Image';

const AboutSection: React.FC = () => (
  <section className={`${styles.about}`}>
    <div className={`${styles.container}`}>
      <Image
        src={DiscussingJobImage}
        alt="Technicians Discussing Job"
        dimensionX={500}
        dimensionY={600}
      />
      <div className={`${styles['about-content']}`}>
        <h2>ABOUT HONEYCOMB HEATING & COOLING</h2>
        <p>
          We are committed to providing the highest quality HVAC services with integrity, honesty,
          and dedication to customer satisfaction. Our team of certified technicians ensures that
          every job is completed to the highest standards.
        </p>
        <div className={`${styles['about-points']}`}>
          <AboutPoint
            label="20+ Years of Experience"
            icon={<Icon iconKey="truck-facing" fill="var(--color-red)" />}
          />
          <AboutPoint
            label="Tailored Solutions"
            icon={<Icon iconKey="wrench" fill="var(--color-red)" />}
          />
          <AboutPoint
            label="We care four our community"
            icon={<Icon iconKey="shield-check" fill="var(--color-red)" />}
          />
        </div>
        <Button>More About Us</Button>
      </div>
    </div>
  </section>
);

export default AboutSection;
