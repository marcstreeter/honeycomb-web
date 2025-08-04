import type React from 'react';
import GoogleLogo from '../../../assets/icons/icon-logo-google.svg';
import styles from './GoogleReviewBadge.module.css';

const GoogleReviewBadge: React.FC = () => (
  <a
    href="https://www.google.com/maps/place/Honeycomb+Heating+and+Cooling/@29.5082921,-98.8246924,10z/data=!4m2!3m1!1s0xfb58f97ead6bf09:0x8687c2c1a8b81ae8#lrd=0xfb58f97ead6bf09:0x8687c2c1a8b81ae8,1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={`${styles['google-review-badge']}`}>
      <span className={`${styles['google-icon-circle']}`}>
        <img src={GoogleLogo} alt="Google Logo" />
      </span>
      <span className={`${styles['google-review-text']}`}>
        <span className={`${styles['google-rating-number']}`}>5.0</span>
        <span className={`${styles['google-rating-count']}`}>(200+ Reviews)</span>
      </span>
    </div>
  </a>
);

export default GoogleReviewBadge;
