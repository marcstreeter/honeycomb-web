import type React from 'react';
import { useCallback, useState } from 'react';
// If you use Button or other shared components, import from @components/Button
import ServiceAC from '../../assets/images/img-air-conditioning-repair.webp';
import ServiceIAQ from '../../assets/images/img-changing-filter.webp';
import ServiceHeat from '../../assets/images/img-repairing-heater.webp';
import ServiceTuneUp from '../../assets/images/img-services-actuneup.webp';
import ServiceDuct from '../../assets/images/img-services-duct.webp';
import ServiceMaintenance from '../../assets/images/img-services-heatermaintenance.webp';
import ServiceHeatPumps from '../../assets/images/img-services-heatpumps.webp';
import ServiceIndoorAirQuality from '../../assets/images/img-services-indoorairquality.webp';
import ServiceSmartHome from '../../assets/images/img-services-smarthome.webp';
import Image from './components/Image';
import styles from './ServicesSection.module.css';

interface ServiceImage {
  src: string;
  alt: string;
  title: string;
}

const serviceImages: ServiceImage[] = [
  { src: ServiceHeat, alt: 'Heating Technician', title: 'HEATING' },
  { src: ServiceIndoorAirQuality, alt: 'Indoor Air Quality', title: 'AIR QUALITY' },
  { src: ServiceTuneUp, alt: 'AC Tune-Up', title: 'AC TUNE-UP' },
  { src: ServiceIAQ, alt: 'Air Quality Technician', title: 'AIR FILTERS' },
  { src: ServiceMaintenance, alt: 'Heater Maintenance', title: 'HEATER UPKEEP' },
  { src: ServiceAC, alt: 'AC Technician', title: 'AIR CONDITIONING' },
  { src: ServiceDuct, alt: 'Duct Services', title: 'DUCT SERVICE' },
  { src: ServiceSmartHome, alt: 'Smart Home Thermostat Installation', title: 'SMART HOME' },
  { src: ServiceHeatPumps, alt: 'Heat Pumps', title: 'HEAT PUMPS' },
];

const ServicesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0, 1, 2]));

  const getCurrentImages = useCallback(() => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % serviceImages.length;
      images.push({ ...serviceImages[index], index });
    }
    return images;
  }, [currentIndex]);

  const handleDotClick = useCallback(
    (dotIndex: number) => {
      const newIndex = dotIndex * 3;
      setCurrentIndex(newIndex % serviceImages.length);

      // Load images for the new set
      const newLoadedImages = new Set(loadedImages);
      for (let i = 0; i < 3; i++) {
        const imageIndex = (newIndex + i) % serviceImages.length;
        newLoadedImages.add(imageIndex);
      }
      setLoadedImages(newLoadedImages);
    },
    [loadedImages]
  );

  const currentImages = getCurrentImages();
  const totalDots = Math.ceil(serviceImages.length / 3);
  const activeDot = Math.floor(currentIndex / 3);

  return (
    <section className={`${styles.services}`}>
      <div className={`${styles.container}`}>
        <h2>Our Services</h2>
        <p>
          Whether you need new installations, repairs to reliable units, or thorough maintenance,
          we've got you covered.
        </p>
        <div className={`${styles['services-grid']}`}>
          {currentImages.map((image, _) => (
            <div key={image.src} className={`${styles['service-card']}`}>
              <Image
                src={loadedImages.has(image.index) ? image.src : ''}
                alt={image.alt}
                aspectRatio={1}
                overlay={{
                  text: <h3>{image.title}</h3>,
                  position: 'bottom',
                }}
                gradientOverlay={{ enabled: true }}
                loading={!loadedImages.has(image.index)}
              />
            </div>
          ))}
        </div>
        <div className={`${styles['carousel-dots']}`}>
          {Array.from({ length: totalDots }, (_, i) => {
            const startIndex = i * 3;
            const endIndex = Math.min(startIndex + 3, serviceImages.length);
            return (
              <button
                key={`dots-${startIndex}-${endIndex}`}
                type="button"
                className={`${styles.dot} ${i === activeDot ? styles.active : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`View services ${startIndex + 1}-${endIndex}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
