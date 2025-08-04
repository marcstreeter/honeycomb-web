import type React from 'react';
import styles from './Image.module.css';

type OverlayPosition = 'center' | 'top' | 'bottom';

interface ImageProps {
  children?: React.ReactNode;
  aspectRatio?: number; // width / height ratio (e.g., 16/9 = 1.78)
  src?: string;
  alt?: string;
  loading?: boolean;
  overlay?: {
    icon?: React.ReactNode;
    text?: React.ReactNode;
    position?: OverlayPosition;
    color?: string;
  };
  gradientOverlay?: {
    enabled: boolean;
    color?: string;
    opacity?: number;
    direction?: 'top' | 'bottom' | 'left' | 'right';
  };
  className?: string;
}
const defaultGradientOverlay = {
  enabled: false,
  color: 'var(--color-black)',
  opacity: 0.5,
  direction: 'bottom',
};

const Image: React.FC<ImageProps> = ({
  children,
  aspectRatio = 16 / 9, // Default 16:9 aspect ratio
  src,
  alt,
  loading = false,
  overlay,
  gradientOverlay = defaultGradientOverlay,
  className = '',
}) => {
  const containerStyle: React.CSSProperties = {
    aspectRatio: aspectRatio.toString(),
  };
  const gradientOverlayPatched = { ...defaultGradientOverlay, ...gradientOverlay };
  const gradientStyle = gradientOverlayPatched?.enabled
    ? {
        background: `linear-gradient(
          ${
            gradientOverlayPatched.direction === 'top'
              ? '180deg'
              : gradientOverlayPatched.direction === 'left'
                ? '90deg'
                : gradientOverlayPatched.direction === 'right'
                  ? '270deg'
                  : '0deg'
          },
          ${gradientOverlayPatched.color || 'rgba(0, 0, 0, 0.6)'} 0%,
          transparent ${gradientOverlayPatched.opacity ? `${gradientOverlayPatched.opacity * 100}%` : '100%'}
        )`,
      }
    : {};

  return (
    <div className={`${styles['image-viewport']} ${className}`} style={containerStyle}>
      {loading ? (
        <div className={`${styles['image-placeholder']} ${styles.loading}`}>
          <div className={styles['loading-spinner']} />
        </div>
      ) : src ? (
        <img src={src} alt={alt || ''} className={styles.image} />
      ) : (
        <div className={styles['image-placeholder']}>{children}</div>
      )}

      {gradientOverlayPatched?.enabled && (
        <div className={styles['gradient-overlay']} style={gradientStyle} />
      )}

      {overlay && (
        <div className={`${styles.overlay} ${styles[`overlay-${overlay.position || 'center'}`]}`}>
          {overlay.icon && <div className={styles['overlay-icon']}>{overlay.icon}</div>}
          {overlay.text && <section className={styles['overlay-text']}>{overlay.text}</section>}
        </div>
      )}
    </div>
  );
};

export default Image;
