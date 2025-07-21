import type React from 'react';
import styles from './ServiceAreasSection.module.css';

const ServiceAreasSection: React.FC = () => (
  <section className={`${styles['service-areas']}`}>
    <div className={`${styles.container}`}>
      <div className={`${styles['areas-content']}`}>
        <h2>COMMUNITIES WE PROUDLY SERVE</h2>
        <p>
          We provide comprehensive HVAC services throughout the greater San Antonio area and
          surrounding communities.
        </p>
        <div className={`${styles['areas-list']}`}>
          <div className={`${styles['area-item']}`}>📍 Service Area #1</div>
          <div className={`${styles['area-item']}`}>📍 Service Area #2</div>
          <div className={`${styles['area-item']}`}>📍 Service Area #3</div>
          <div className={`${styles['area-item']}`}>📍 Service Area #4</div>
          <div className={`${styles['area-item']}`}>📍 Service Area #5</div>
          <div className={`${styles['area-item']}`}>📍 Service Area #6</div>
          <div className={`${styles['area-item']}`}>📍 Service Area #7</div>
          <div className={`${styles['area-item']}`}>📍 Service Area #8</div>
        </div>
      </div>
      <div className={`${styles['map-container']}`}>
        <div className={`${styles['texas-map']}`}>
          <div className={`${styles['map-placeholder']}`}>Texas Map</div>
          <div className={`${styles['map-pin']}`}>📍</div>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceAreasSection;
