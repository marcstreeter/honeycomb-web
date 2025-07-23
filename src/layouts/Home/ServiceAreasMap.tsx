import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type React from 'react';
import { useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

// biome-ignore lint/suspicious/noExplicitAny: Leaflet type definition workaround to handle default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export interface ServiceArea {
  name: string;
  lat: number;
  lng: number;
}

// San Antonio area service locations
export const serviceAreas: ServiceArea[] = [
  { name: 'Downtown San Antonio', lat: 29.4241, lng: -98.4936 },
  { name: 'North San Antonio', lat: 29.5149, lng: -98.4951 },
  { name: 'West San Antonio', lat: 29.4497, lng: -98.6197 },
  { name: 'East San Antonio', lat: 29.4572, lng: -98.3698 },
  { name: 'Alamo Heights', lat: 29.4919, lng: -98.4669 },
  { name: 'Stone Oak', lat: 29.6266, lng: -98.4697 },
  { name: 'The Dominion', lat: 29.5927, lng: -98.6781 },
  { name: 'Southtown', lat: 29.4046, lng: -98.4951 },
];

// Individual marker component to handle popup control
interface ServiceMarkerProps {
  area: ServiceArea;
  shouldOpenPopup: boolean;
}

const ServiceMarker: React.FC<ServiceMarkerProps> = ({ area, shouldOpenPopup }) => {
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    if (shouldOpenPopup && markerRef.current) {
      // Delay popup opening to allow map animation to complete
      const timer = setTimeout(() => {
        if (markerRef.current) {
          markerRef.current.openPopup();
        }
      }, 1600);

      return () => clearTimeout(timer);
    }
  }, [shouldOpenPopup]);

  return (
    <Marker key={area.name} position={[area.lat, area.lng]} ref={markerRef}>
      <Popup>
        <strong>{area.name}</strong>
        <br />
        HVAC Services Available
      </Popup>
    </Marker>
  );
};

// Component to handle map focus changes
interface MapFocusControllerProps {
  focusedArea: string | null;
}

const MapFocusController: React.FC<MapFocusControllerProps> = ({ focusedArea }) => {
  const map = useMap();

  useEffect(() => {
    if (focusedArea) {
      const area = serviceAreas.find((a) => a.name === focusedArea);
      if (area) {
        map.flyTo([area.lat, area.lng], 13, {
          duration: 1.5,
        });
      }
    }
  }, [focusedArea, map]);

  return null;
};

interface ServiceAreasMapProps {
  focusedArea?: string | null;
}

const ServiceAreasMap: React.FC<ServiceAreasMapProps> = ({ focusedArea = null }) => {
  // San Antonio coordinates
  const center: [number, number] = [29.4241, -98.4936];

  return (
    <MapContainer
      center={center}
      zoom={11}
      style={{ height: '100%', width: '100%', borderRadius: '15px' }}
      zoomControl={true}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapFocusController focusedArea={focusedArea} />
      {serviceAreas.map((area) => (
        <ServiceMarker key={area.name} area={area} shouldOpenPopup={focusedArea === area.name} />
      ))}
    </MapContainer>
  );
};

export default ServiceAreasMap;
