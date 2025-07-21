import type React from 'react';
import styles from './HeroHeadline.module.css';

const HeroHeadline: React.FC = () => (
  <h1 className={`${styles['hero-headline']}`}>
    #1 HVAC SERVICES YOU CAN TRUST IN SAN ANTONIO, TX
  </h1>
);

export default HeroHeadline;
