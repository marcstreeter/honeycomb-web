// Dynamic SVG loader that imports SVG files and extracts their inner content

// Available icon keys based on files that start with "icon-"
export type IconKey =
  | 'phone'
  | 'calendar'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'gps-marker'
  | 'logo-google'
  | 'shield-check'
  | 'social-insta'
  | 'social-facebook'
  | 'social-tiktok'
  | 'star'
  | 'thumbs-up'
  | 'tool-box'
  | 'truck-facing'
  | 'wrench';

interface ParsedSVG {
  viewBox?: string;
  width?: string;
  height?: string;
  innerContent: string;
}

// Cache for loaded and parsed SVGs
const svgCache = new Map<IconKey, ParsedSVG>();

/**
 * Parse SVG string and extract attributes and inner content
 */
function parseSVGContent(svgString: string): ParsedSVG {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  const svgElement = doc.querySelector('svg');

  if (!svgElement) {
    throw new Error('Invalid SVG content');
  }

  // Extract SVG attributes
  const viewBox = svgElement.getAttribute('viewBox') || undefined;
  const width = svgElement.getAttribute('width') || undefined;
  const height = svgElement.getAttribute('height') || undefined;

  // Extract inner content (everything inside the SVG tag)
  const innerContent = svgElement.innerHTML;

  return {
    viewBox,
    width,
    height,
    innerContent,
  };
}

/**
 * Load SVG file dynamically and extract its inner content
 */
export async function loadSVGContent(iconKey: IconKey): Promise<ParsedSVG> {
  if (svgCache.has(iconKey)) {
    // biome-ignore lint/style/noNonNullAssertion: we just confirmed it does exist
    return svgCache.get(iconKey)!;
  }

  try {
    // Dynamic import of the SVG file
    const svgModule = await import(`./icon-${iconKey}.svg?raw`);
    const svgString = svgModule.default;

    // Parse the SVG content
    const parsed = parseSVGContent(svgString);

    // Cache the result
    svgCache.set(iconKey, parsed);

    return parsed;
  } catch (error) {
    console.error(`Failed to load icon: ${iconKey}`, error);
    throw new Error(`Failed to load icon: ${iconKey}`);
  }
}

/**
 * Preload multiple SVG icons for better performance
 */
export async function preloadIcons(iconKeys: IconKey[]): Promise<void> {
  const promises = iconKeys.map((key) =>
    loadSVGContent(key).catch((error) => {
      console.warn(`Failed to preload icon: ${key}`, error);
    })
  );

  await Promise.allSettled(promises);
}
