import type React from 'react';
import TechnicianWorkingImage from '../../assets/images/img-checking-unit.webp';
import Button from '../../components/Button';
import styles from './ComfyClub.module.css';
import Image from './components/Image';

const ComfyClub: React.FC = () => (
  <section className={`${styles['comfy-club']}`}>
    <div className={`${styles.container}`}>
      <Image src={TechnicianWorkingImage} alt="Technicians Working" aspectRatio={1} />
      <div className={`${styles['club-content']}`}>
        <h2>JOIN THE COMFY CLUB</h2>
        <p>
          The Comfy Club - Honeycomb Heating & Cooling's exclusive membership designed to eliminate
          HVAC headaches and keep your home running like a dream in San Antonio, TX.
        </p>
        <ul className={`${styles['benefits-list']}`}>
          <li>Annual System Tune-Ups</li>
          <li>Discounts on Repairs</li>
          <li>Priority Service</li>
          <li>No Service Call Fees</li>
        </ul>
        <Button
          bgColor="var(--color-yellow)"
          text="Get Started Today"
          textColor="var(--color-black)"
        />
      </div>
    </div>
  </section>
);

export default ComfyClub;
