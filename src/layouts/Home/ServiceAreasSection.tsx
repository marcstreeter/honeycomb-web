import type React from 'react';
import ServiceAreaItem from './ServiceAreaItem';
import ServiceAreasMap from './ServiceAreasMap';
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
          <ServiceAreaItem label="Downtown San Antonio" />
          <ServiceAreaItem label="North San Antonio" />
          <ServiceAreaItem label="West San Antonio" />
          <ServiceAreaItem label="East San Antonio" />
          <ServiceAreaItem label="Alamo Heights" />
          <ServiceAreaItem label="Stone Oak" />
          <ServiceAreaItem label="The Dominion" />
          <ServiceAreaItem label="Southtown" />
        </div>
      </div>
      <div className={`${styles['map-container']}`}>
        <div className={`${styles['texas-map']}`}>
          <ServiceAreasMap />
        </div>
      </div>
    </div>
  </section>
);

export default ServiceAreasSection;
