import * as React from 'react';
import { createPortal } from 'react-dom';

import { useId } from '@fluentui/react-hooks';
import {
  FocusTrapZone,
  IFocusTrapZone,
} from '@fluentui/react/lib/FocusTrapZone';
import { IconButton } from '../IconButton';
import { BrandContext } from '../SkeBasis';

import i18n, { t } from './../utils/i18n/i18n';
import { useModalContext, ModalInstance } from './ModalContext';
import { ModalProps } from './Modal.types';
import { getClassNames } from './Modal.classNames';
import { useEscOnPress } from './utils';

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
  } = props;
  const modalWrapperId = 'modal-wrapper';
  const [isDOMAnchorReady, setIsDOMAnchorReady] = React.useState<boolean>(
    false
  );
  const [modalRef, setModalRef] = React.useState<HTMLDivElement | null>(null);

  const modalInstance: ModalInstance | undefined = useModalContext();
  const focusTrapZone = React.useRef<IFocusTrapZone>(null);
  const focusTrapZoneElm = React.useRef<HTMLDivElement>(null);

  language && i18n.changeLanguage(language);

  const closeModal = (): void => {
    modalInstance && modalInstance.close(name);
    document.body.style.overflow = '';

    onClose && modalRef && onClose(modalRef);
  };

  const onRefChange = React.useCallback((node: HTMLDivElement) => {
    setModalRef(node);
  }, []);

  React.useEffect(() => {
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
  }, [shadowRootNode]);

  React.useEffect(() => {
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
          className={`${getClassNames(props, tag).wrapper} ${
            customClassNames?.wrapper ?? ''
          }`}
        >
          <div
            ref={onRefChange}
            className={`${getClassNames(props, tag).modal} ${
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
                  uniqueId={'modal-closebutton'}
                  title={t('modal.closebutton')}
                  className={`${getClassNames(props, tag).closeButton} ${
                    customClassNames?.closebutton ?? ''
                  }`}
                  icon={'Cancel'}
                  onClick={closeModal}
                />
              )}
              {children}
            </FocusTrapZone>
          </div>
          <div
            data-testid={'modal-overlay'}
            className={`${getClassNames(props, tag).overlay} ${
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

export const Modal = React.memo(ModalBase);
