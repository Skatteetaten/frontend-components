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
import { ModalTypes } from './Modal.types';
import { useEscOnPress } from './utils';

import styles from './styles.module.css';

const ModalBase: React.FC<ModalTypes> = ({
  name,
  shadowRootNode,
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
    if (!shadowRootNode) {
      setIsDOMAnchorReady(true);
      return;
    }

    if (shadowRootNode.getElementById(modalWrapperId)) {
      setIsDOMAnchorReady(true);
    } else {
      const modalWrapper = document.createElement('div');
      modalWrapper.id = modalWrapperId;
      shadowRootNode.appendChild(modalWrapper);
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
          className={customClassNames?.trapzone}
          elementToFocusOnDismiss={elementToFocusOnDismiss}
          isClickableOutsideFocusTrap
        >
          {!hideCloseButton && (
            <CloseButton
              className={customClassNames?.closebutton}
              onClick={closeModal}
            />
          )}
          {children}
        </FocusTrapZone>
      </div>
      <Overlay className={customClassNames?.overlay} onClick={closeModal} />
    </div>,
    shadowRootNode?.getElementById('modal-wrapper') ?? document.body
  );
};

export const Modal = memo(ModalBase);
