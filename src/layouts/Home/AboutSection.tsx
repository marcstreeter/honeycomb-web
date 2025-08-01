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
      <Image src={DiscussingJobImage} alt="Technicians Discussing Job" aspectRatio={5 / 6} />
      <div className={`${styles['about-content']}`}>
        <h2>About Honeycomb Heating & Cooling</h2>
        <p>
          We believe in doing the right thing - every single time. Based in the heart of San
          Antonio, we've built a reputation for providing reliable and trustworthy HVAC services
          that truly stand out. Our dedication to integrity and quality has made us a cornerstone in
          the communit, offering the golden standard in heating and cooling services.
        </p>
        <div className={`${styles['about-points']}`}>
          <AboutPoint
            label="20+ Years of Experience"
            icon={<Icon iconKey="truck-facing" fill="var(--color-red)" width="1em" height="1em" />}
          />
          <AboutPoint
            label="Tailored Solutions"
            icon={<Icon iconKey="wrench" fill="var(--color-red)" width="1em" height="1em" />}
          />
          <AboutPoint
            label="We care four our community"
            icon={<Icon iconKey="shield-check" fill="var(--color-red)" width="1em" height="1em" />}
          />
        </div>
        <Button>More About Us</Button>
      </div>
    </div>
  </section>
);

export default AboutSection;
