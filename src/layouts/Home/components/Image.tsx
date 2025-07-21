import type React from 'react';
import styles from './Image.module.css';

const Image: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={`${styles['image-placeholder']}`}>{children}</div>
);

export default Image;
