import type React from 'react';
import GoogleLogo from '../../../assets/icons/icon-logo-google.svg';
import styles from './GoogleReviewBadge.module.css';

const GoogleReviewBadge: React.FC = () => (
  <div className={`${styles['google-review-badge']}`}>
    <span className={`${styles['google-icon-circle']}`}>
      <img src={GoogleLogo} alt="Google Logo" />
    </span>
    <span className={`${styles['google-review-text']}`}>
      <span className={`${styles['google-rating-number']}`}>5.0</span>
      <span className={`${styles['google-rating-count']}`}>(200+ Reviews)</span>
    </span>
  </div>
);

export default GoogleReviewBadge;
