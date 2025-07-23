import type React from 'react';
import { useState } from 'react';
import ServiceAreaItem from './ServiceAreaItem';
import ServiceAreasMap, { serviceAreas } from './ServiceAreasMap';
import styles from './ServiceAreasSection.module.css';

const ServiceAreasSection: React.FC = () => {
  const [focusedArea, setFocusedArea] = useState<string | null>(null);

  const handleAreaClick = (areaName: string) => {
    setFocusedArea(areaName);
  };

  return (
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
            {serviceAreas.map((area) => (
              <ServiceAreaItem
                key={area.name}
                label={area.name}
                onClick={() => handleAreaClick(area.name)}
              />
            ))}
          </div>
        </div>
        <div className={`${styles['map-container']}`}>
          <div className={`${styles['texas-map']}`}>
            <ServiceAreasMap focusedArea={focusedArea} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
