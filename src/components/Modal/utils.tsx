import { useEffect } from 'react';

export const useEscOnPress = (
  ref: HTMLDivElement | null,
  onClose?: (ref: HTMLDivElement) => void
): void => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      if (ref == null) {
        return;
      }
      if (event.code === 'Escape' && onClose) {
        onClose(ref);
      }
    };

    if (ref) {
      window.addEventListener('keydown', onKeyDown as EventListener, false);
    }
    return function cleanup(): void {
      if (window) {
        window.removeEventListener('keydown', onKeyDown as EventListener);
      }
    };
  }, [ref, onClose]);
};
