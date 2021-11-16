import React, { useContext } from 'react';

export interface ModalInstance {
  open: (name: string) => void;
  close: (name: string) => void;
  toggle: (name: string) => void;
  closeAll: () => void;
  isOpen: (name: string) => boolean;
  isClose: (name: string) => boolean;
  list: Array<string>;
}
export const ModalContext = React.createContext<ModalInstance | undefined>(
  undefined
);

export const useModalContext = (): ModalInstance | undefined =>
  useContext<ModalInstance | undefined>(ModalContext);

export const ModalConsumer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <ModalContext.Consumer>
    {(modal): React.ReactNode =>
      React.cloneElement(
        children as React.ReactElement<{ modal: ModalInstance }, string>,
        { modal }
      )
    }
  </ModalContext.Consumer>
);
