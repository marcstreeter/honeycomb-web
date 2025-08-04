import type React from 'react';
import Icon from '../../assets/icons/Icon';
import Button from '../../components/Button';
import styles from './ServiceAreaItem.module.css';

interface ServiceAreaItemProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

const ServiceAreaItem: React.FC<ServiceAreaItemProps> = ({ label, onClick }) => {
  if (onClick) {
    return (
      <Button
        onClick={onClick}
        bgColor="transparent"
        bgColorHover="transparent"
        textColor="var(--color-black)"
        className={styles['area-item']}
        icon={<Icon iconKey="gps-marker" fill="var(--color-red)" />}
      >
        {label}
      </Button>
    );
  }

  return (
    <div className={styles['area-item']} style={{ cursor: 'default' }}>
      <Icon iconKey="gps-marker" fill="var(--color-red)" />
      {label}
    </div>
  );
};

export default ServiceAreaItem;
