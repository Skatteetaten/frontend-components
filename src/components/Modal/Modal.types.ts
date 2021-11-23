import * as React from 'react';

export interface ModalProps {
  /** Unikt navn til modal-instancen - refereres ved open/close osv */
  name: string;
  /** Mulighet til å angi shadowRoot til en custom node Modal'en skal instansieres i. Dersom den inneholder en id="style-injector" vil modal-wrapper være nested der */
  shadowRootNode?: Document | ShadowRoot;
  /** Skjuler lukkeknappen */
  hideCloseButton?: boolean;
  /** Element fokuset skal settes tilbake til når Modalen lukkes */
  elementToFocusOnDismiss?: HTMLElement;
  /** Custom classNames for å overskrive styling */
  customClassNames?: {
    wrapper?: string;
    trapzone?: string;
    modal?: string;
    closebutton?: string;
    overlay?: string;
  };
  /** Språk vist i komponent. Default er norsk bokmål. */
  language?: 'nb' | 'nn' | 'en';
  /** Funksjon som kalles når Nodalen lukkes */
  onClose?: (ref: HTMLDivElement) => void;
  /** Funksjon som kalles når Nodalen åpnes */
  onOpen?: (ref: HTMLDivElement) => void;
  children: React.ReactNode;
}
