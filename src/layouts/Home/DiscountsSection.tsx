import type React from 'react';
import Button from '../../components/Button';
import styles from './DiscountsSection.module.css';

const DiscountsSection: React.FC = () => (
  <section className={`${styles.discounts}`}>
    <div className={`${styles.container}`}>
      <h2>DISCOUNTS & SPECIALS</h2>
      <div className={`${styles['discounts-grid']}`}>
        <div className={`${styles['discount-card']}`}>
          <div className={`${styles['discount-logo']}`}>🐝</div>
          <h3>FREE SECOND OPINION</h3>
          <p>Get a free second opinion on your HVAC needs! Compare prices today!</p>
          <Button>Call to Redeem</Button>
        </div>
        <div className={`${styles['discount-card']}`}>
          <div className={`${styles['discount-logo']}`}>🐝</div>
          <h3>$79 TUNE-UP</h3>
          <p>Get your system ready! Can't be combined with other offers.</p>
          <Button>Call to Redeem</Button>
        </div>
        <div className={`${styles['discount-card']}`}>
          <div className={`${styles['discount-logo']}`}>🐝</div>
          <h3>$25 OFF ANY REPAIR</h3>
          <p>Any repair or service of $250 or more. Can't be combined with other offers.</p>
          <Button>Call to Redeem</Button>
        </div>
      </div>
    </div>
  </section>
);

export default DiscountsSection;
