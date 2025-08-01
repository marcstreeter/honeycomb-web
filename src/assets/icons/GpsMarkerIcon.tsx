import type * as React from 'react';

const GpsMarkerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 1189 1503" {...props}>
    <title>GPS Location Marker</title>
    <path
      fill="currentColor"
      d="M569 3a592 592 0 0 1 618 596c-1 41-10 81-22 120-20 62-48 120-79 177-51 92-110 179-173 264a3819 3819 0 0 1-272 322 67 67 0 0 1-95-1 3739 3739 0 0 1-315-381c-52-72-100-147-142-226-30-58-56-117-73-180C4 652-1 609 1 565c7-132 53-248 137-349A586 586 0 0 1 569 3m-82 323c-29 14-54 32-76 55-55 58-78 128-68 208 8 57 33 106 75 145 65 62 142 84 230 66a251 251 0 0 0-30-496c-46-4-89 3-131 22Z"
    />
  </svg>
);

export default GpsMarkerIcon;
