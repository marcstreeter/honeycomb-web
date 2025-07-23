import type React from 'react';
import CalendarIcon from '../../../assets/icons/CalendarIcon';
import PhoneIcon from '../../../assets/icons/PhoneIcon';
import Button from '../../../components/Button';
import styles from './HeroButtons.module.css';

const HeroButtons: React.FC = () => (
  <div className={`${styles['hero-buttons']}`}>
    <Button icon={<PhoneIcon />} href="tel:210-404-3209" text="(210) 405-3291" />
    <Button icon={<CalendarIcon />} href="#schedule" bgColor="var(--color-red)">
      Schedule Service
    </Button>
  </div>
);

export default HeroButtons;
