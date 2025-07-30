import type React from 'react';
import styles from './Image.module.css';

type OverlayPosition = 'center' | 'top' | 'bottom';

interface ImageProps {
  children?: React.ReactNode;
  aspectRatio?: number; // width / height ratio (e.g., 16/9 = 1.78)
  src?: string;
  alt?: string;
  overlay?: {
    icon?: React.ReactNode;
    text?: React.ReactNode;
    position?: OverlayPosition;
  };
  gradientOverlay?: {
    enabled: boolean;
    color?: string;
    opacity?: number;
    direction?: 'top' | 'bottom' | 'left' | 'right';
  };
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  children,
  aspectRatio = 16 / 9, // Default 16:9 aspect ratio
  src,
  alt,
  overlay,
  gradientOverlay,
  className = '',
}) => {
  const containerStyle: React.CSSProperties = {
    aspectRatio: aspectRatio.toString(),
  };

  const gradientStyle = gradientOverlay?.enabled
    ? {
        background: `linear-gradient(
          ${
            gradientOverlay.direction === 'top'
              ? '180deg'
              : gradientOverlay.direction === 'left'
                ? '90deg'
                : gradientOverlay.direction === 'right'
                  ? '270deg'
                  : '0deg'
          },
          ${gradientOverlay.color || 'rgba(0, 0, 0, 0.6)'} 0%,
          transparent ${gradientOverlay.opacity ? `${gradientOverlay.opacity * 100}%` : '100%'}
        )`,
      }
    : {};

  return (
    <div className={`${styles['image-viewport']} ${className}`} style={containerStyle}>
      {src ? (
        <img src={src} alt={alt || ''} className={styles.image} />
      ) : (
        <div className={styles['image-placeholder']}>{children}</div>
      )}

      {gradientOverlay?.enabled && (
        <div className={styles['gradient-overlay']} style={gradientStyle} />
      )}

      {overlay && (
        <div className={`${styles.overlay} ${styles[`overlay-${overlay.position || 'center'}`]}`}>
          {overlay.icon && <div className={styles['overlay-icon']}>{overlay.icon}</div>}
          {overlay.text && <div className={styles['overlay-text']}>{overlay.text}</div>}
        </div>
      )}
    </div>
  );
};

export default Image;
