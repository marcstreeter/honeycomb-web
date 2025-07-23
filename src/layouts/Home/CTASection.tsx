import type React from 'react';
import Icon from '../../assets/icons/Icon';
import MascotIcon from '../../assets/icons/MascotIcon';
import Button from '../../components/Button';
import styles from './CTASection.module.css';

const BottomCTASection: React.FC = () => (
  <section className={`${styles['bottom-cta']}`}>
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <h2>BUZZ US TODAY FOR RELIABLE HVAC SOLUTIONS!</h2>
        <div className={`${styles['cta-buttons']}`}>
          <Button
            href="tel:210-404-3209"
            text="210-404-3209"
            icon={<Icon iconKey="phone" fill="var(--color-white)" />}
          />
          <Button
            text="Schedule Service"
            bgColor="var(--color-black)"
            icon={<Icon iconKey="calendar" fill="var(--color-white)" />}
          />
        </div>
      </div>
      <div className={`${styles['mascot-container']}`}>
        <MascotIcon />
      </div>
    </div>
  </section>
);

export default BottomCTASection;
