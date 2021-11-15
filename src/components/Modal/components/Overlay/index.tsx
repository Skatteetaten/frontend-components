import React from 'react';

interface OverlayTypes {
  className?: string;
  onClick: () => void;
}

export const Overlay: React.FC<OverlayTypes> = ({ onClick, className }) => (
  <div
    data-testid={'modal-overlay'}
    className={className ? className : ''}
    onClick={onClick}
  />
);
