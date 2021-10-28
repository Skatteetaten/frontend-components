import React, { useState, useMemo } from 'react';

import { ModalContext, ModalConsumer, ModalInstance } from './ModalContext';

type ModalProviderTypes = {
  children?: React.ReactNode;
};

export const ModalProvider: React.FC<ModalProviderTypes> = ({ children }) => {
  const [modalList, setModalList] = useState<string[]>([]);

  const isOpen = (name: string): boolean => modalList.includes(name);
  const isClosed = (name: string): boolean => !modalList.includes(name);

  const openModal = (name: string): void => {
    if (isOpen(name)) {
      return;
    }
    setModalList([...modalList, name]);
  };

  const closeModal = (name: string): void => {
    if (isClosed(name)) {
      return;
    }
    const newList = modalList.filter((modalName) => modalName !== name);
    setModalList(newList);
  };

  const closeAll = (): void => {
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

  const modal: ModalInstance = useMemo(
    () => ({
      open: (name: string): void => openModal(name),
      close: (name: string): void => closeModal(name),
      toggle: (name: string): void => toggleModal(name),
      closeAll: (): void => closeAll(),
      isOpen: (name: string): boolean => isOpen(name),
      isClose: (name: string): boolean => isClosed(name),
      list: modalList,
    }),
    [modalList]
  );

  return (
    <ModalContext.Provider value={modal}>
      <ModalConsumer>{children}</ModalConsumer>
    </ModalContext.Provider>
  );
};
