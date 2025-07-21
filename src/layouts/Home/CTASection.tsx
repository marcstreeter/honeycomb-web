import type React from 'react';
import Button from '../../components/Button';
import styles from './CTASection.module.css';

const BottomCTASection: React.FC = () => (
  <section className={`${styles['bottom-cta']}`}>
    <div className={`${styles.container}`}>
      <h2>BUZZ US TODAY FOR RELIABLE HVAC SOLUTIONS!</h2>
      <div className={`${styles['cta-buttons']}`}>
        <a href="tel:210-404-3209" className={`${styles['phone-btn-large']}`}>
          (210) 404-3209
        </a>
        <Button>Schedule Service</Button>
      </div>
      <div className={`${styles['bee-mascot-large']}`}>🐝</div>
    </div>
  </section>
);

export default BottomCTASection;
