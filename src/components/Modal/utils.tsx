import { useEffect } from 'react';

// TO-DO skrive tester
export const getModalAnchor = (shadowRootNode?: Document | ShadowRoot) => {
  const modalAnchorInShadowDom = shadowRootNode?.getElementById(
    'modal-wrapper'
  );
  const modalAnchorInLightDom = document.getElementById('modal-wrapper');
  return modalAnchorInShadowDom ?? modalAnchorInLightDom ?? document.body;
};

// TO-DO skrive tester
export const getSkeBasisStylingWrapper = (rootNode: Document | ShadowRoot) => {
  let ltrWrapper: Element | undefined;
  const ltrDomElements = rootNode.querySelectorAll('[dir="ltr"]');

  for (let i = 0; i < ltrDomElements.length; i++) {
    if (ltrDomElements[i].className.includes('body-')) {
      ltrWrapper = ltrDomElements[i];
    }
  }

  return ltrWrapper;
};

// TO-DO skrive tester
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

// TO-DO oppdatere tester
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
