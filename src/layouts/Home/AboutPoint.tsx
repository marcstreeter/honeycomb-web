import type React from 'react';
import styles from './AboutPoint.module.css';

interface AboutPointProps {
  label: string;
  icon: React.ReactNode;
}

const AboutPoint: React.FC<AboutPointProps> = ({ label, icon }) => (
  <div className={styles.point}>
    {icon}
    <span>{label}</span>
  </div>
);

export default AboutPoint;
