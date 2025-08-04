import { useMediaQuery, useTheme } from '@mui/material';
import type React from 'react';
import CalendarIcon from '../../../assets/icons/CalendarIcon';
import PhoneIcon from '../../../assets/icons/PhoneIcon';
import Button from '../../../components/Button';
import styles from './HeroButtons.module.css';

const HeroButtons: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={`${styles['hero-buttons']}`}>
      <Button
        icon={<PhoneIcon />}
        href="tel:210-404-3209"
        text="(210) 405-3291"
        shortLabel="Buzz Us!"
        showSmall={isMobile}
      />
      <Button icon={<CalendarIcon />} href="#schedule" bgColor="var(--color-red)">
        Schedule Service
      </Button>
    </div>
  );
};

export default HeroButtons;
