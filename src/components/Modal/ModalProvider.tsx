import React, { useState, useMemo } from 'react';

import { ModalContext, ModalConsumer, ModalInstance } from './ModalContext';

type ModalProviderTypes = {
  children?: React.ReactNode;
};

/**
 * @deprecated Komponenten er erstattet av Modal fra "@skatteetaten/ds-overlays"
 */
export const ModalProvider: React.FC<ModalProviderTypes> = ({ children }) => {
  const [modalList, setModalList] = useState<string[]>([]);

  const modal: ModalInstance = useMemo(() => {
    const isOpen = (name: string): boolean => modalList.includes(name);
    const isClosed = (name: string): boolean => !modalList.includes(name);

    const openModal = (name: string): void => {
      document.body.style.overflow = 'hidden';
      if (isOpen(name)) {
        return;
      }
      setModalList([...modalList, name]);
    };

    const closeModal = (name: string): void => {
      document.body.style.overflow = '';
      if (isClosed(name)) {
        return;
      }
      const newList = modalList.filter((modalName) => modalName !== name);
      setModalList(newList);
    };

    const closeAll = (): void => {
      document.body.style.overflow = '';
      if (modalList.length > 0) {
        setModalList([]);
      }
    };

    const toggleModal = (name: string): void => {
      if (isOpen(name)) {
        closeModal(name);
        return;
      }
      openModal(name);
    };
    return {
      open: (name: string): void => openModal(name),
      close: (name: string): void => closeModal(name),
      toggle: (name: string): void => toggleModal(name),
      closeAll: (): void => closeAll(),
      isOpen: (name: string): boolean => isOpen(name),
      isClose: (name: string): boolean => isClosed(name),
      list: modalList,
    };
  }, [modalList]);

  return (
    <ModalContext.Provider value={modal}>
      <ModalConsumer>{children}</ModalConsumer>
    </ModalContext.Provider>
  );
};
