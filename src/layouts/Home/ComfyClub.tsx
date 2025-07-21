import type React from 'react';
import Button from '../../components/Button';
import styles from './ComfyClub.module.css';
import Image from './components/Image';

const ComfyClub: React.FC = () => (
  <section className={`${styles['comfy-club']}`}>
    <div className={`${styles.container}`}>
      <div className={`${styles['club-content']}`}>
        <h2>JOIN THE COMFY CLUB</h2>
        <p>
          Our exclusive membership program is designed to eliminate HVAC headaches and keep your
          system running smoothly year-round.
        </p>
        <ul className={`${styles['benefits-list']}`}>
          <li>ANNUAL SYSTEM TUNE-UPS</li>
          <li>DISCOUNTS ON REPAIRS</li>
          <li>PRIORITY SERVICE</li>
          <li>NO SERVICE CALL FEES</li>
        </ul>
        <Button>Get Started Today</Button>
      </div>
      <Image>Technicians Working</Image>
    </div>
  </section>
);

export default ComfyClub;
