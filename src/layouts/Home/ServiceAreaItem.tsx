import type React from 'react';
import Icon from '../../assets/icons/Icon';
import styles from './ServiceAreaItem.module.css';

interface ServiceAreaItemProps {
  label: string;
  className?: string;
}

const ServiceAreaItem: React.FC<ServiceAreaItemProps> = ({ label }) => (
  <div className={styles['area-item']}>
    <Icon iconKey="gps-marker" fill="var(--color-red)" />
    {label}
  </div>
);

export default ServiceAreaItem;
