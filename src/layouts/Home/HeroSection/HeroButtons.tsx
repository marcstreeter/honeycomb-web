import type React from 'react';
import CalendarIcon from '../../../assets/icons/CalendarIcon';
import PhoneIcon from '../../../assets/icons/PhoneIcon';
import Button from '../../../components/Button';
import styles from './HeroButtons.module.css';

const HeroButtons: React.FC = () => (
  <div className={`${styles['hero-buttons']}`}>
    <Button icon={<PhoneIcon />} href="tel:210-404-3209">
      (210) 405-3291
    </Button>
    <Button icon={<CalendarIcon />} href="#schedule" bgColor="var(--color-black)">
      Schedule Service
    </Button>
  </div>
);

export default HeroButtons;
