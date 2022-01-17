import { useEffect } from 'react';

export const getModalAnchor = (
  shadowRootNode?: Document | ShadowRoot
): HTMLElement => {
  const modalAnchorInShadowDom = shadowRootNode?.getElementById(
    'modal-wrapper'
  );
  const modalAnchorInLightDom = document.getElementById('modal-wrapper');
  return modalAnchorInShadowDom ?? modalAnchorInLightDom ?? document.body;
};

export const getSkeBasisStylingWrapper = (
  rootNode: Document | ShadowRoot
): Element | undefined => {
  let ltrWrapper: Element | undefined;
  const ltrDomElements = rootNode.querySelectorAll('[dir="ltr"]');

  for (let i = 0; i < ltrDomElements.length; i++) {
    if (ltrDomElements[i].className.includes('body-')) {
      ltrWrapper = ltrDomElements[i];
    }
  }

  return ltrWrapper;
};

export const createModalDomPlacement = (
  setFlag: (a: boolean) => void,
  shadowRootNode?: Document | ShadowRoot
) => {
  const modalAnchorId = 'modal-wrapper';
  const rootNode = shadowRootNode ?? document;

  if (rootNode.getElementById(modalAnchorId)) {
    setFlag(true);
    return;
  } else {
    const skeBasisStylingWrapper = getSkeBasisStylingWrapper(rootNode);
    const modalAnchor = document.createElement('div');
    modalAnchor.id = modalAnchorId;
    const parent = skeBasisStylingWrapper ?? shadowRootNode ?? document.body;
    parent.appendChild(modalAnchor);
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
