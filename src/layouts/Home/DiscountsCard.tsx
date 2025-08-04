import type React from 'react';
import LogoIcon from '../../assets/icons/LogoIcon';
import Button from '../../components/Button';
import styles from './DiscountsCard.module.css';

interface DiscountCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const DiscountCard: React.FC<DiscountCardProps> = ({ title, description, buttonText }) => (
  <div className={styles['discount-card']}>
    <div className={styles.logo}>{<LogoIcon />}</div>
    <div className={styles.content}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button href={'tel:210-405-3291'}>{buttonText}</Button>
    </div>
  </div>
);

export default DiscountCard;
