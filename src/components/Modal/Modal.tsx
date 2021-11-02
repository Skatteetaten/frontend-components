import React, { memo, useCallback, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useId } from '@fluentui/react-hooks';
import {
  FocusTrapZone,
  IFocusTrapZone,
} from '@fluentui/react/lib/FocusTrapZone';
import classnames from 'classnames';
import { IconButton } from '../IconButton';
import { BrandContext } from '../SkeBasis';

import i18n, { t } from './../utils/i18n/i18n';
//import { CloseButton } from './components/CloseButton';
import { Overlay } from './components/Overlay';
import { useModalContext, ModalInstance } from './ModalContext';
import { ModalProps } from './Modal.types';
import { getClassNames } from './Modal.classNames';
import { useEscOnPress } from './utils';

// import styles from './styles.module.css';

const ModalBase: React.FC<ModalProps> = (props: ModalProps) => {
  const {
    name,
    shadowRootNode,
    hideCloseButton,
    customClassNames,
    language,
    elementToFocusOnDismiss,
    onClose,
    onOpen,
    children,
    ...rest
  } = props;
  const modalWrapperId = 'modal-wrapper';
  const [isDOMAnchorReady, setIsDOMAnchorReady] = useState<boolean>(false);
  const [modalRef, setModalRef] = useState<HTMLDivElement | null>(null);

  const modalInstance: ModalInstance | undefined = useModalContext();
  const focusTrapZone = React.useRef<IFocusTrapZone>(null);
  const focusTrapZoneElm = React.useRef<HTMLDivElement>(null);

  if (language) {
    i18n.changeLanguage(language);
  }

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
    <BrandContext.Consumer>
      {({ tag }) => (
        <div
          className={`${classnames(getClassNames(props, tag).wrapper)} ${
            customClassNames?.wrapper ?? ''
          }`}
        >
          <div
            ref={onRefChange}
            className={`${classnames(getClassNames(props, tag).modal)} ${
              customClassNames?.modal ?? ''
            }`}
          >
            <FocusTrapZone
              id={focusTrapZoneId}
              ref={focusTrapZoneElm}
              componentRef={focusTrapZone}
              className={customClassNames?.trapzone ?? ''}
              elementToFocusOnDismiss={elementToFocusOnDismiss}
              isClickableOutsideFocusTrap
            >
              {!hideCloseButton && (
                <IconButton
                  title={t('modal.closebutton')}
                  className={`${classnames(
                    getClassNames(props, tag).closeButton
                  )} ${customClassNames?.closebutton ?? ''}`}
                  icon={'Cancel'}
                  onClick={closeModal}
                />
              )}
              {children}
            </FocusTrapZone>
          </div>
          <Overlay
            className={`${classnames(getClassNames(props, tag).overlay)} ${
              customClassNames?.overlay ?? ''
            }`}
            onClick={closeModal}
          />
        </div>
      )}
    </BrandContext.Consumer>,
    shadowRootNode?.getElementById('modal-wrapper') ?? document.body
  );
};

export const Modal = memo(ModalBase);
