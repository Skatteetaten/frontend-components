import React from 'react';

import styles from './styles.module.css';

interface OverlayTypes {
  className?: string;
  onClick: () => void;
}

export const Overlay: React.FC<OverlayTypes> = ({ onClick, className }) => (
  <div
    data-testid={'modal-overlay'}
    className={`${styles.overlay} ${className ? className : ''}`}
    onClick={onClick}
  />
);
