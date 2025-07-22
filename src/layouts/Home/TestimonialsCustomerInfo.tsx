import styles from './TestimonialsCustomerInfo.module.css';

interface CustomerInfoProps {
  name: string;
  title: string;
  image?: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ name, title, image }) => {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className={styles['customer-info']}>
      <div className={styles['customer-avatar']}>
        {image ? (
          <img src={image} alt={name} className={styles['avatar-image']} />
        ) : (
          <span className={styles['avatar-initial']}>{firstLetter}</span>
        )}
      </div>
      <div className={styles['customer-details']}>
        <div className={styles['customer-name']}>{name.toUpperCase()}</div>
        <div className={styles['customer-title']}>{title}</div>
      </div>
    </div>
  );
};

export default CustomerInfo;
