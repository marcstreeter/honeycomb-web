import type React from 'react';
import TechnicianWorkingImage from '../../assets/images/img-checking-unit.webp';
import Button from '../../components/Button';
import styles from './ComfyClub.module.css';
import Image from './components/Image';

const ComfyClub: React.FC = () => (
  <section className={`${styles['comfy-club']}`}>
    <div className={`${styles.container}`}>
      <Image
        src={TechnicianWorkingImage}
        alt="Technicians Working"
        dimensionX={450}
        dimensionY={450}
      />
      <div className={`${styles['club-content']}`}>
        <h2>JOIN THE COMFY CLUB</h2>
        <p>
          The Comfy Club - Honeycomb Heating & Cooling's exclusive membership designed to eliminate
          HVAC headaches and keep your home running like a dream in San Antonio, TX.
        </p>
        <ul className={`${styles['benefits-list']}`}>
          <li>ANNUAL SYSTEM TUNE-UPS</li>
          <li>DISCOUNTS ON REPAIRS</li>
          <li>PRIORITY SERVICE</li>
          <li>NO SERVICE CALL FEES</li>
        </ul>
        <Button bgColor="var(--color-yellow)" text="Get Started Today" color="var(--color-black)" />
      </div>
    </div>
  </section>
);

export default ComfyClub;
