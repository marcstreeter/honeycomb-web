import type React from 'react';
import DiscountCard from './DiscountsCard';
import styles from './DiscountsSection.module.css';

const DiscountsSection: React.FC = () => (
  <section className={`${styles.discounts}`}>
    <div className={`${styles.container}`}>
      <h2>DISCOUNTS & SPECIALS</h2>
      <div className={`${styles['discounts-grid']}`}>
        <DiscountCard
          title="Free Second Opinion"
          description="Get a free second opinion on your HVAC needs! Compare prices today!"
          buttonText="Call to Redeem"
        />
        <DiscountCard
          title="$79 Tune-Up"
          description="Get your system ready! Can't be combined with other offers."
          buttonText="Call to Redeem"
        />
        <DiscountCard
          title="$25 Off Any Repair"
          description="Any repair or service of $250 or more. Can't be combined with other offers."
          buttonText="Call to Redeem"
        />
      </div>
    </div>
  </section>
);

export default DiscountsSection;
