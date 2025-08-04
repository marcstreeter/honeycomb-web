import type React from 'react';
import Icon from '../../assets/icons/Icon';
import LogoIcon from '../../assets/icons/LogoIcon';
import Button from '../../components/Button';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={`${styles.footer}`}>
    <div className={`${styles.container}`}>
      <div className={`${styles['footer-logo']}`}>
        <LogoIcon />
      </div>
      <div className={`${styles['footer-content']}`}>
        <div className={`${styles['footer-links']}`}>
          <h4>Company</h4>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#areas">Service Areas</a>
          </p>
          <p>
            <a href="#membership">Membership Plans</a>
          </p>
          <p>
            <a href="#national">National Program</a>
          </p>
          <p>
            <a href="#quote">Request a Quote</a>
          </p>
        </div>
        <div className={`${styles['footer-info']}`}>
          <h4>Office</h4>
          <p>Honeycomb Heating & Cooling</p>
          <p>San Antonio, TX</p>
          <p>
            <a href="tel:210-404-3209">(210) 404-3209</a>
          </p>
          <div>
            <p>License</p>
            <p style={{ fontWeight: '900', color: 'var(--color-white)' }}>TACLA160435E</p>
          </div>
        </div>
        <div className={`${styles['footer-hours']}`}>
          <div className={`${styles.content}`}>
            <h4>Hours of Operation</h4>
            <p>Mon - Fri 8:00 AM - 6:00 PM</p>
            <p>Sat 8:00 AM - 5:00 PM</p>
            <p>Sun - Closed</p>
          </div>
          <Button
            text="Schedule Service"
            bgColor="var(--color-blue)"
            icon={<Icon iconKey="calendar" fill="var(--color-white)" />}
          />
        </div>
      </div>
    </div>
    <div className={`${styles['footer-bottom']}`}>
      <div className={`${styles['footer-bottom-container']}`}>
        <div className={`${styles['footer-copyright']}`}>
          © 2025 Honeycomb Heating & Cooling All Rights Reserved. Privacy Policy
        </div>
        <div className={`${styles['footer-social']}`}>
          <a
            href="https://www.instagram.com/honeycombhvac"
            className={`${styles['social-link']}`}
            aria-label="Instagram"
          >
            <Icon iconKey="social-insta" />
          </a>
          <a
            href="https://www.facebook.com/people/Honeycomb-Air/61563373273355/"
            className={`${styles['social-link']}`}
            aria-label="Facebook"
          >
            <Icon iconKey="social-facebook" />
          </a>
          <a
            href="https://www.tiktok.com/@honeycomb.hvac"
            className={`${styles['social-link']}`}
            aria-label="TikTok"
          >
            <Icon iconKey="social-tiktok" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
