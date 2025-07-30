import type React from 'react';
import BadgeExperienceIcon from '../../assets/icons/BadgeExperienceIcon.tsx';
import BadgeReviewsIcon from '../../assets/icons/BadgeReviewsIcon.tsx';
import BadgeServedIcon from '../../assets/icons/BadgeServedIcon.tsx';
import ComfortGuaranteeImage from '../../assets/images/img-honeycomb-team.webp';
import HoneyIcon from '../../components/HoneyIcon';
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
      </div>
      <div className={`${styles['comfort-team']}`}>
        <Image src={ComfortGuaranteeImage} alt="Comfort Guarantee" aspectRatio={4 / 5} />
      </div>
      <div className={`${styles['stats-grid']}`}>
        <div className={`${styles['stat-item']}`}>
          <div className={`${styles['stat-content']}`}>
            <div className={`${styles['stat-number']}`}>20Y</div>
            <div className={`${styles['stat-label']}`}>20+ YEARS EXPERIENCE</div>
          </div>
          <HoneyIcon icon={<BadgeExperienceIcon />} />
        </div>
        <div className={`${styles['stat-item']}`}>
          <div className={`${styles['stat-content']}`}>
            <div className={`${styles['stat-number']}`}>200+</div>
            <div className={`${styles['stat-label']}`}>FIVE STAR REVIEWS</div>
          </div>
          <HoneyIcon icon={<BadgeReviewsIcon />} />
        </div>
        <div className={`${styles['stat-item']}`}>
          <div className={`${styles['stat-content']}`}>
            <div className={`${styles['stat-number']}`}>2K+</div>
            <div className={`${styles['stat-label']}`}>CUSTOMERS SERVED</div>
          </div>
          <HoneyIcon icon={<BadgeServedIcon />} />
        </div>
      </div>
    </div>
  </section>
);

export default ComfortGuarantee;
