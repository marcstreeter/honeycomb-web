import type React from 'react';
import { useEffect, useState } from 'react';
import { type IconKey, loadSVGContent } from './svgLoader';

interface SVGIconProps {
  // Required icon key to load SVG content
  iconKey: IconKey;

  // Optional overrides for SVG properties
  viewBoxX?: number;
  viewBoxY?: number;
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  width?: number | string;
  height?: number | string;
  fill?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<SVGIconProps> = ({
  iconKey,
  viewBoxX = 0,
  viewBoxY = 0,
  viewBoxWidth = 24,
  viewBoxHeight = 24,
  width = 24,
  height = 24,
  fill = 'currentColor',
  alt = 'Icon',
  className = '',
  style = {},
}) => {
  const [svgContent, setSvgContent] = useState<string>('');
  const [parsedViewBox, setParsedViewBox] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadIcon() {
      try {
        setLoading(true);
        setError(null);

        const parsed = await loadSVGContent(iconKey);

        if (!mounted) return;

        setSvgContent(parsed.innerContent);

        // Use parsed viewBox from SVG or construct from provided dimensions
        if (parsed.viewBox) {
          setParsedViewBox(parsed.viewBox);
        } else if (parsed.width && parsed.height) {
          setParsedViewBox(`0 0 ${parsed.width} ${parsed.height}`);
        } else {
          setParsedViewBox(`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`);
        }
        setLoading(false);
      } catch (err) {
        if (!mounted) return;

        console.error('Failed to load icon:', err);
        setError(`Failed to load icon: ${iconKey}`);
        setLoading(false);
      }
    }

    loadIcon();

    return () => {
      mounted = false;
    };
  }, [iconKey, viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight]);

  const svgProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: parsedViewBox,
    width: width,
    height: height,
    fill: fill,
    className: className,
    style: style,
    'aria-label': alt,
  };
  if (loading) {
    return (
      <svg {...svgProps} aria-label={`Loading icon: ${iconKey}`}>
        <title>Loading icon: {iconKey}</title>
      </svg>
    );
  }

  if (error) {
    return (
      <svg {...svgProps} aria-label={`Error loading icon: ${iconKey}`}>
        <title>Error loading icon: {iconKey}</title>
      </svg>
    );
  }

  return (
    <svg {...svgProps} aria-label={alt}>
      {alt && <title>{alt}</title>}
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Safe HTML from sanitized source */}
      <g dangerouslySetInnerHTML={{ __html: svgContent }} />
    </svg>
  );
};

export default Icon;
