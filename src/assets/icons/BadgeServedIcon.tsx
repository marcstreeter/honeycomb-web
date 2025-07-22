import type * as React from 'react';

const BadgeServedIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 1480 2000"
    {...props}
  >
    <title>Served Icon Badge</title>
    <path
      fill="#fff"
      d="M1102 1141c-6 17-23 32-46 32H467c-29 0-53-23-53-52l1-218v-6h274v47c0 9 5 13 13 13h116c9 0 13-4 13-13v-47h275v223c0 7-2 14-4 21ZM665 611v-9c0-7 4-11 12-11h167c9 0 13 4 13 13v15h64a62 62 0 0 1 62 65v33h70c24 0 44 14 50 36 2 5 3 11 3 17v95H831v-12c0-7-4-11-11-11H701c-7 0-12 4-12 12v11H415v-96c0-24 17-45 41-50l15-2h66v-32a63 63 0 0 1 63-66h65v-8m-96 106h384v-35c0-16-14-30-30-30h-66v13c0 8-4 13-12 13H677c-8 0-12-4-12-12v-14h-69c-15 0-29 14-29 29v36h2Z"
    />
  </svg>
);

export default BadgeServedIcon;
