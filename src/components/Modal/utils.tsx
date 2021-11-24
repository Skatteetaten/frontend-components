import { useEffect } from 'react';

export const createModalDomPlacement = (
  setFlag: (a: boolean) => void,
  shadowRootNode: Document | ShadowRoot | undefined
) => {
  if (!shadowRootNode) {
    setFlag(true);
    return;
  }

  const styleInjectorWrapperId = 'style-injector';
  const modalWrapperId = 'modal-wrapper';

  if (shadowRootNode.getElementById(modalWrapperId)) {
    setFlag(true);
  } else {
    const modalWrapper = document.createElement('div');
    modalWrapper.id = modalWrapperId;
    const styleInjectorWrapper = shadowRootNode.getElementById(
      styleInjectorWrapperId
    );
    const parent = styleInjectorWrapper ? styleInjectorWrapper : shadowRootNode;
    parent.appendChild(modalWrapper);
    setFlag(true);
  }
};

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
