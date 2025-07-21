import type React from 'react';
import styles from './ComfortGuarantee.module.css';
import Image from './components/Image';

const ComfortGuarantee: React.FC = () => (
  <section className={`${styles['comfort-guarantee']}`}>
    <div className={`${styles.container}`}>
      <div className={`${styles['comfort-content']}`}>
        <h2>HONEYCOMB GUARANTEES YOUR COMFORT</h2>
        <p>
          We are dedicated to providing exceptional HVAC services that ensure your comfort and peace
          of mind. Our team of experienced professionals is committed to delivering reliable,
          efficient, and cost-effective solutions for all your heating and cooling needs.
        </p>
        <div className={`${styles['stats-grid']}`}>
          <div className={`${styles['stat-item']}`}>
            <div className={`${styles['stat-icon']}`}>🔧</div>
            <div className={`${styles['stat-number']}`}>20Y</div>
            <div className={`${styles['stat-label']}`}>20+ YEARS EXPERIENCE</div>
          </div>
          <div className={`${styles['stat-item']}`}>
            <div className={`${styles['stat-icon']}`}>⭐</div>
            <div className={`${styles['stat-number']}`}>200+</div>
            <div className={`${styles['stat-label']}`}>FIVE STAR REVIEWS</div>
          </div>
          <div className={`${styles['stat-item']}`}>
            <div className={`${styles['stat-icon']}`}>🔒</div>
            <div className={`${styles['stat-number']}`}>2K+</div>
            <div className={`${styles['stat-label']}`}>CUSTOMERS SERVED</div>
          </div>
        </div>
      </div>
      <div className={`${styles['comfort-image']}`}>
        <Image>Team Photo</Image>
      </div>
    </div>
  </section>
);

export default ComfortGuarantee;
