import type React from 'react';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import GpsMarkerIcon from '../../assets/icons/GpsMarkerIcon';
import ThumbsUpIcon from '../../assets/icons/ThumbsUpIcon';
import ToolBoxIcon from '../../assets/icons/ToolBoxIcon';
import styles from './TopBar.module.css';

const TopBar: React.FC = () => (
  <div className={`${styles['top-bar-refined']}`}>
    <div className={`${styles.container} ${styles['topbar-container']}`}>
      <div className={`${styles['topbar-left']}`}>
        <GpsMarkerIcon className={`${styles['topbar-icon']}`} aria-label="Location" />
        <span>Serving San Antonio, Hablamos Español</span>
      </div>
      <div className={`${styles['topbar-right']}`}>
        <a href="#refer" className={`${styles['topbar-link']}`}>
          <ThumbsUpIcon className={`${styles['topbar-icon']}`} aria-label="Refer a Friend" />
          <span>Refer a Friend</span>
        </a>
        <a href="#membership" className={`${styles['topbar-link']}`}>
          <ToolBoxIcon className={`${styles['topbar-icon']}`} aria-label="Membership Plans" />
          <span>Membership Plans</span>
        </a>
        <a href="#schedule" className={`${styles['topbar-link']}`}>
          <CalendarIcon className={`${styles['topbar-icon']}`} aria-label="Schedule Online" />
          <span>Schedule Online</span>
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
