import React, { memo, useCallback, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useId } from '@fluentui/react-hooks';
import {
  FocusTrapZone,
  IFocusTrapZone,
} from '@fluentui/react/lib/FocusTrapZone';

import { CloseButton } from './components/CloseButton';
import { Overlay } from './components/Overlay';
import { useModalContext, ModalInstance } from './ModalContext';
import { useEscOnPress } from './utils';

import styles from './styles.module.css';

interface ModalTypes {
  name: string;
  rootNode?: Element | null;
  hideCloseButton?: boolean;
  customClassNames?: {
    wrapper?: string;
    trapZone?: string;
    modal?: string;
    closeBtn?: string;
    overlay?: string;
  };
  elementToFocusOnDismiss?: HTMLElement;
  onClose?: (ref: HTMLDivElement) => void;
  onOpen?: (ref: HTMLDivElement) => void;
  children: React.ReactNode;
}

// TO-DO add trapFocus
// TO-DO add tester
const ModalBase: React.FC<ModalTypes> = ({
  name,
  rootNode,
  hideCloseButton,
  customClassNames,
  elementToFocusOnDismiss,
  onClose,
  onOpen,

  children,
}) => {
  const modalWrapperId = 'modal-wrapper';
  const [isDOMAnchorReady, setIsDOMAnchorReady] = useState<boolean>(false);
  const [modalRef, setModalRef] = useState<HTMLDivElement | null>(null);

  const modalInstance: ModalInstance | undefined = useModalContext();
  const focusTrapZone = React.useRef<IFocusTrapZone>(null);
  const focusTrapZoneElm = React.useRef<HTMLDivElement>(null);

  const onRefChange = useCallback((node: HTMLDivElement) => {
    setModalRef(node);
  }, []);

  const closeModal = (): void => {
    modalInstance && modalInstance.close(name);
    document.body.style.overflow = '';

    if (onClose && modalRef) {
      onClose(modalRef);
    }
  };

  useEffect(() => {
    if (!rootNode) {
      setIsDOMAnchorReady(true);
      return;
    }

    if (rootNode.shadowRoot?.getElementById(modalWrapperId)) {
      setIsDOMAnchorReady(true);
    } else {
      const modalWrapper = document.createElement('div');
      modalWrapper.id = modalWrapperId;
      rootNode.shadowRoot?.appendChild(modalWrapper);
      setIsDOMAnchorReady(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (modalRef && onOpen) {
      onOpen(modalRef);
    }
  }, [modalRef, onOpen]);

  useEscOnPress(modalRef, closeModal);
  const focusTrapZoneId = useId('ModalTrapFocus');

  if (!isDOMAnchorReady) {
    return null;
  }

  return createPortal(
    <div className={`${styles.wrapper} ${customClassNames?.wrapper}`}>
      <div
        ref={onRefChange}
        className={`${styles.modal} ${customClassNames?.modal}`}
      >
        <FocusTrapZone
          id={focusTrapZoneId}
          ref={focusTrapZoneElm}
          componentRef={focusTrapZone}
          className={customClassNames?.trapZone}
          elementToFocusOnDismiss={elementToFocusOnDismiss}
          isClickableOutsideFocusTrap
        >
          {!hideCloseButton && (
            <CloseButton
              className={customClassNames?.closeBtn}
              onClick={closeModal}
            />
          )}
          {children}
        </FocusTrapZone>
      </div>
      <Overlay className={customClassNames?.overlay} onClick={closeModal} />
    </div>,
    rootNode?.shadowRoot?.getElementById('modal-wrapper') ?? document.body
  );
};

export const Modal = memo(ModalBase);
