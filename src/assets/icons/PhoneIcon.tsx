import type * as React from 'react';

const PhoneIcon = ({
  title = 'Phone Icon',
  ...props
}: React.SVGProps<SVGSVGElement> & { title?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 1935 1933" {...props}>
    <title>{title}</title>
    <path
      fill="currentColor"
      d="M1843 1856c-4 21-13 40-30 54a87 87 0 0 1-59 23 3429 3429 0 0 1-125-4 2937 2937 0 0 1-146-16 1743 1743 0 0 1-945-469A1751 1751 0 0 1 4 283l-3-99c-2-42 27-82 73-92L462 3c37-8 68 2 92 31 8 9 13 20 18 31l22 52 27 62 46 107 81 190c17 39 5 83-27 109L495 770l-1 1 22 45a1391 1391 0 0 0 641 621c5 2 7 2 10-2l184-224c22-27 50-37 84-32 12 2 24 8 35 12l47 20 46 20 52 22 46 20 52 22 46 20 52 22 46 20 22 10c17 7 30 18 40 33 11 16 16 35 15 54-1 13-5 26-7 39l-79 340-5 23Z"
    />
  </svg>
);

export default PhoneIcon;
