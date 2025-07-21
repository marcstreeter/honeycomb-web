import type React from 'react';
import Button from '../../components/Button';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={`${styles.footer}`}>
    <div className={`${styles.container}`}>
      <div className={`${styles['footer-content']}`}>
        <div className={`${styles['footer-logo']}`}>
          <div className={`${styles['logo-icon']}`}>🐝</div>
          <span>Honeycomb Heating & Cooling</span>
        </div>
        <div className={`${styles['footer-links']}`}>
          <a href="#about">About</a>
          <a href="#areas">Service Areas</a>
          <a href="#membership">Membership Plans</a>
          <a href="#national">National Program</a>
          <a href="#quote">Request a Quote</a>
        </div>
        <div className={`${styles['footer-info']}`}>
          <p>Honeycomb Heating & Cooling</p>
          <p>San Antonio, TX</p>
          <p>Phone: (210) 404-3209</p>
          <p>License: TACLA160435E</p>
        </div>
        <div className={`${styles['footer-hours']}`}>
          <h4>Hours of Operation</h4>
          <p>Mon - Fri 8:00 AM - 6:00 PM</p>
          <p>Sat 8:00 AM - 5:00 PM</p>
          <p>Sun - Closed</p>
        </div>
        <div className="footer-cta">
          <Button>Schedule Service</Button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
