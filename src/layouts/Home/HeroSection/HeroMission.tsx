import type React from 'react';
import styles from './HeroMission.module.css';

const HeroMission: React.FC = () => (
  <p className={`${styles['hero-mission']}`}>
    Heating and AC services designed to keep you comfortable in your San Antonio home all year
    round.
  </p>
);

export default HeroMission;
