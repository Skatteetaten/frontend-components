import React from 'react';

import styles from './styles.module.css';

interface CloseButtonTypes {
  className?: string | null;
  onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonTypes> = ({
  className,
  onClick,
}) => (
  <button
    data-testid={'modal-closebutton'}
    className={`${styles.closeButton} ${className ? className : ''}`}
    onClick={onClick}
  >
    {'X'}
  </button>
);
