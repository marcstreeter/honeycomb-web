import type React from 'react';
import Icon from '../../assets/icons/Icon';
import ServiceAreaItem from './ServiceAreaItem';
import styles from './ServiceAreasSection.module.css';

const ServiceAreasSection: React.FC = () => (
  <section className={`${styles['service-areas']}`}>
    <div className={`${styles.container}`}>
      <div className={`${styles['areas-content']}`}>
        <h4>Service Areas</h4>
        <h2>COMMUNITIES WE PROUDLY SERVE</h2>
        <p>
          We provide comprehensive HVAC services throughout the greater San Antonio area and
          surrounding communities.
        </p>
        <h3>We focus on serving:</h3>
        <div className={`${styles['areas-list']}`}>
          <ServiceAreaItem label="Service Area #1" />
          <ServiceAreaItem label="Service Area #2" />
          <ServiceAreaItem label="Service Area #3" />
          <ServiceAreaItem label="Service Area #4" />
          <ServiceAreaItem label="Service Area #5" />
          <ServiceAreaItem label="Service Area #6" />
          <ServiceAreaItem label="Service Area #7" />
          <ServiceAreaItem label="Service Area #8" />
        </div>
      </div>
      <div className={`${styles['map-container']}`}>
        <div className={`${styles['texas-map']}`}>
          <div className={`${styles['map-placeholder']}`}>Texas Map</div>
          <div className={`${styles['map-pin']}`}>
            <Icon iconKey="gps-marker" fill="var(--color-red)" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceAreasSection;
