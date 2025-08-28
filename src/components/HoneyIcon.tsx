import type * as React from 'react';
import ToolBoxIcon from '../assets/icons/ToolBoxIcon'; // Or any icon you want

const THEME_RED = 'var(--color-red)';
const THEME_BLACK = 'var(--color-black)';
const THEME_WHITE = 'var(--color-white)';

interface HexagonProps extends React.SVGProps<SVGSVGElement> {
  color: string;
  width: number;
  height: number;
}

const Hexagon: React.FC<HexagonProps> = ({ color, width, height, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 110"
    {...props}
    style={{ display: 'block', ...props.style }}
  >
    {/* Slightly taller hexagon */}
    <polygon points="50,5 95,30 95,80 50,105 5,80 5,30" fill={color} />
  </svg>
);

interface HoneyIconProps {
  icon?: React.ReactNode;
  darkTheme?: boolean;
}

const HoneyIcon: React.FC<HoneyIconProps> = ({ icon, darkTheme = false }) => {
  // Sizes
  const blackW = 80,
    blackH = 90;
  const borderW = 68,
    borderH = 75;
  const border = blackW - borderW; // 12
  const redW = borderW - border / 2; // 62
  const redH = borderH - border / 2; // 69

  return (
    <div style={{ position: 'relative', width: blackW, height: blackH }}>
      {/* Black */}
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <Hexagon color="black" width={blackW} height={blackH} />
      </div>
      {/* White */}
      <div
        style={{
          position: 'absolute',
          top: (blackH - borderH) / 2,
          left: (blackW - borderW) / 2,
        }}
      >
        <Hexagon color={darkTheme ? THEME_BLACK : THEME_WHITE} width={borderW} height={borderH} />
      </div>
      {/* Red (theme) */}
      <div
        style={{
          position: 'absolute',
          top: (blackH - redH) / 2,
          left: (blackW - redW) / 2,
        }}
      >
        <Hexagon color={darkTheme ? THEME_BLACK : THEME_RED} width={redW} height={redH} />
      </div>
      {/* Icon - vertically offset for visual centering */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateY(6%)',
        }}
      >
        {icon || <ToolBoxIcon style={{ color: 'white', width: 22, height: 22 }} />}
      </div>
    </div>
  );
};

export default HoneyIcon;
