import type React from 'react';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const PageSection: React.FC<PageSectionProps> = ({ children, className = '', style }) => (
  <div className={`content-container ${className}`} style={style}>
    {children}
  </div>
);

export default PageSection;
