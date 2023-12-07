import * as React from 'react';
import { createPortal } from 'react-dom';

import { useId } from '@fluentui/react-hooks';
import { FocusTrapZone, IFocusTrapZone } from '@fluentui/react';
import { IconButton } from '../IconButton';
import { BrandContext } from '../SkeBasis';
import classnames from 'classnames';
import i18n, { t } from './../utils/i18n/i18n';
import { useModalContext, ModalInstance } from './ModalContext';
import { ModalProps } from './Modal.types';
import { getClassNames } from './Modal.classNames';
import {
  getModalAnchor,
  createModalDomPlacement,
  useEscOnPress,
} from './utils';

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
    onClose && modalRef && onClose(modalRef);
  };

  const onRefChange = React.useCallback((node: HTMLDivElement) => {
    setModalRef(node);
  }, []);

  React.useEffect(() => {
    createModalDomPlacement(setIsDOMAnchorReady, shadowRootNode);
  }, [shadowRootNode]);

  React.useEffect(() => {
    if (modalRef && onOpen) {
      onOpen(modalRef);
    }
  }, [modalRef, onOpen]);

  useEscOnPress(modalRef, closeModal);
  const focusTrapZoneId = useId('ModalTrapFocus');

  if (!isDOMAnchorReady) {
    return null;
  }

  const anchor = getModalAnchor(shadowRootNode);

  return createPortal(
    <BrandContext.Consumer>
      {({ tag }) => (
        <div
          className={classnames(
            getClassNames(props, tag).wrapper,
            customClassNames?.wrapper
          )}
        >
          <div
            ref={onRefChange}
            className={classnames(
              getClassNames(props, tag).modal,
              customClassNames?.modal
            )}
          >
            <FocusTrapZone
              id={focusTrapZoneId}
              ref={focusTrapZoneElm}
              componentRef={focusTrapZone}
              className={classnames(customClassNames?.trapzone)}
              elementToFocusOnDismiss={elementToFocusOnDismiss}
              isClickableOutsideFocusTrap
            >
              {!hideCloseButton && (
                <IconButton
                  uniqueId={'modal-closebutton'}
                  title={t('common.close')}
                  className={classnames(
                    getClassNames(props, tag).closeButton,
                    customClassNames?.closebutton
                  )}
                  icon={'Cancel'}
                  onClick={closeModal}
                />
              )}
              {children}
            </FocusTrapZone>
          </div>
          <div
            data-testid={'modal-overlay'}
            className={classnames(
              getClassNames(props, tag).overlay,
              customClassNames?.overlay
            )}
            onClick={closeModal}
          />
        </div>
      )}
    </BrandContext.Consumer>,
    anchor
  );
};

/**
 * @deprecated Komponenten er erstattet av Modal fra "@skatteetaten/ds-overlays"
 *
 * visibleName Modal
 */

export const Modal = React.memo(ModalBase);
