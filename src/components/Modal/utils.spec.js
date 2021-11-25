import React from 'react';
import { render } from 'react-dom';

import { mount } from 'enzyme';

import {
  getModalAnchor,
  getSkeBasisStylingWrapper,
  createModalDomPlacement,
  useEscOnPress,
} from './utils';
import { DummyWebComp } from '../utils/test-utils';

describe('Modal utils', () => {
  describe('getModalAnchor', () => {
    test('Når den kalles med document som attribute, Så returnerer den riktig modal-wrapper', () => {
      const original = global.document['body'];
      document.body.innerHTML =
        '<div dir="ltr" class="body-555"><div id="modal-wrapper" data-testid="getModalAnchorTest1"></div></div>';
      const a = getModalAnchor(document);
      expect(a.getAttribute('data-testid')).toBe('getModalAnchorTest1');
      document.body.innerHTML = '';
      global.document['body'] = original;
    });
    test('Når den kalles med shadowRoot som attribute, Så returnerer den riktig modal-wrapper', () => {
      const original = global.document['body'];
      const originalWindow = global.window;
      document.body.innerHTML =
        '<modalanchor-shadowrootnode-test><div dir="ltr" class="body-555"><div id="modal-wrapper" data-testid="getModalAnchorTest2"></div></div></modalanchor-shadowrootnode-test>';
      const element = document.querySelector('modalanchor-shadowrootnode-test');
      const a = getModalAnchor(element.shadowRoot);
      expect(a.getAttribute('data-testid')).toBe('getModalAnchorTest2');
      global.window = originalWindow;
      document.body.innerHTML = '';
      global.document['body'] = original;
    });
    test('Når den kalles uten attribute, Så returnerer den riktig modal-wrapper', () => {
      const original = global.document['body'];
      document.body.innerHTML =
        '<div dir="ltr" class="body-555"><div id="modal-wrapper" data-testid="getModalAnchorTest3"></div></div>';
      const a = getModalAnchor();
      expect(a.getAttribute('data-testid')).toBe('getModalAnchorTest3');
      document.body.innerHTML = '';
      global.document['body'] = original;
    });
    test('Når modal-wrapper ikke finnes, Så returnerer den document.body', () => {
      const original = global.document['body'];
      document.body.innerHTML =
        '<div><div id="something-random" data-testid="getModalAnchorTest4"></div></div>';
      const a = getModalAnchor();
      expect(a).toEqual(document.body);
      document.body.innerHTML = '';
      global.document['body'] = original;
    });
  });

  describe('getSkeBasisStylingWrapper', () => {
    test('Når getSkeBasisStylingWrapper kalles mens rootNode inneholder 3 ltr nodes, så retuneres den med class "body-*"', () => {
      const original = global.document['body'];
      document.body.innerHTML =
        '<div><div dir="ltr" class="body-555"></div><div dir="ltr" class="blabla"></div><div dir="ltr" class="abc"></div></div>';
      const a = getSkeBasisStylingWrapper(document);
      expect(a.getAttribute('class')).toEqual('body-555');
      document.body.innerHTML = '';
      global.document['body'] = original;
    });
    test('Når getSkeBasisStylingWrapper kalles mens rootNode inneholder flere ltr nodes med class "body-*", så returneres det den siste', () => {
      const original = global.document['body'];
      document.body.innerHTML =
        '<div><div dir="ltr" class="body-555"></div><div dir="ltr" class="body-333"></div><div dir="ltr" class="body-444"></div></div>';
      const a = getSkeBasisStylingWrapper(document);
      expect(a.getAttribute('class')).toEqual('body-444');
      document.body.innerHTML = '';
      global.document['body'] = original;
    });
    test('Når getSkeBasisStylingWrapper kalles mens rootNode inneholder ingen ltr nodes med class "body-*", så returneres det ingenting', () => {
      const original = global.document['body'];
      document.body.innerHTML =
        '<div><div dir="ltr" class="blala"></div><div dir="ltr" class="333"></div><div dir="ltr" class="abc"></div></div>';
      const a = getSkeBasisStylingWrapper(document);
      expect(a).toBeUndefined();
      document.body.innerHTML = '';
      global.document['body'] = original;
    });
  });

  describe('createModalDomPlacement', () => {
    test('Når shadowRootNode ikke finnes brukes det document som fallback. Når modal-wrapper er i document, så returneres det undefined og flagget settes til true', () => {
      const setFlagMock = jest.fn();
      const original = global.document['body'];
      document.body.innerHTML =
        '<div id="modal-wrapper" data-testid="createModalDomPlacementTest"></div>';
      const a = createModalDomPlacement(setFlagMock);
      expect(a).toBeUndefined();
      expect(setFlagMock).toHaveBeenCalledWith(true);
      expect(document.body.innerHTML).toEqual(
        '<div id="modal-wrapper" data-testid="createModalDomPlacementTest"></div>'
      );
      document.body.innerHTML = '';
      global.document['body'] = original;
    });

    test('Når shadowRootNode ikke finnes brukes det document som fallback. Når modal-wrapper ikke er i document, så lages det en modal-wrapper og flagget settes til true', () => {
      const setFlagMock = jest.fn();
      const original = global.document['body'];
      const a = createModalDomPlacement(setFlagMock);
      expect(a).toBeUndefined();
      expect(setFlagMock).toHaveBeenCalledWith(true);
      expect(document.getElementById('modal-wrapper')).toBeDefined();
      global.document['body'] = original;
    });

    test('Når shadowRootNode ikke finnes brukes det document som fallback. Når modal-wrapper ikke er i document, men at det finnes getSkeBasisStylingWrapper, så lages det en modal-wrapper i getSkeBasisStylingWrapper og flagget settes til true', () => {
      const setFlagMock = jest.fn();
      const original = global.document['body'];
      document.body.innerHTML = '<div dir="ltr" class="body-555">';
      const a = createModalDomPlacement(setFlagMock);
      expect(a).toBeUndefined();
      expect(setFlagMock).toHaveBeenCalledWith(true);
      expect(document.getElementById('modal-wrapper')).toBeDefined();
      expect(document.body.innerHTML).toEqual(
        '<div dir="ltr" class="body-555"><div id="modal-wrapper"></div></div>'
      );
      global.document['body'] = original;
    });

    test('Når shadowRootNode finnes og at modal-wrapper er i document, så returneres det undefined og flagget settes til true', () => {
      const setFlagMock = jest.fn();
      const original = global.document['body'];
      const originalWindow = global.window;
      window.customElements.define('shadowrootnode-test1', DummyWebComp);
      document.body.innerHTML =
        '<shadowrootnode-test1 data-testid="createModalDomPlacementTest1"><div id="modal-wrapper"></div></shadowrootnode-test1>';
      const element = document.querySelector('shadowrootnode-test1');
      const a = createModalDomPlacement(setFlagMock, element.shadowRoot);
      expect(a).toBeUndefined();
      expect(setFlagMock).toHaveBeenCalledWith(true);
      expect(element.shadowRoot.innerHTML).toEqual(
        '<div><div id="shadow">dummy-shadow</div></div><div id="modal-wrapper"></div>'
      );
      document.body.innerHTML = '';
      global.window = originalWindow;
      global.document['body'] = original;
    });

    test('Når shadowRootNode finnes og at modal-wrapper ikke er i den, så lages det en modal-wrapper og flagget settes til true', () => {
      class DummyWebComp2 extends DummyWebComp {}
      const setFlagMock = jest.fn();
      const originalWindow = global.window;
      const original = global.document['body'];
      window.customElements.define('shadowrootnode-test2', DummyWebComp2);
      document.body.innerHTML =
        '<shadowrootnode-test2 data-testid="createModalDomPlacementTest2"><div>babla</div></shadowrootnode-test2>';
      const element = document.querySelector('shadowrootnode-test2');
      const a = createModalDomPlacement(setFlagMock, element.shadowRoot);
      expect(a).toBeUndefined();
      expect(setFlagMock).toHaveBeenCalledWith(true);
      expect(element.shadowRoot.getElementById('modal-wrapper')).toBeDefined();
      expect(element.shadowRoot.innerHTML).toEqual(
        '<div><div id="shadow">dummy-shadow</div></div><div id="modal-wrapper"></div>'
      );
      document.body.innerHTML = '';
      global.window = originalWindow;
      global.document['body'] = original;
    });

    test('Når shadowRootNode finnes og at modal-wrapper ikke er i den, men at det finnes getSkeBasisStylingWrapper, så lages det en modal-wrapper i getSkeBasisStylingWrapper og flagget settes til true', () => {
      class DummyWebComp3 extends DummyWebComp {}
      const setFlagMock = jest.fn();
      const originalWindow = global.window;
      const original = global.document['body'];
      window.customElements.define('shadowrootnode-test3', DummyWebComp3);
      document.body.innerHTML =
        '<shadowrootnode-test3 data-testid="createModalDomPlacementTest2"><div dir="ltr" class="body-555">babla</div></shadowrootnode-test3>';
      const element = document.querySelector('shadowrootnode-test3');
      const a = createModalDomPlacement(setFlagMock, element.shadowRoot);
      expect(a).toBeUndefined();
      expect(setFlagMock).toHaveBeenCalledWith(true);
      expect(element.shadowRoot.getElementById('modal-wrapper')).toBeDefined();
      expect(element.shadowRoot.innerHTML).toEqual(
        '<div><div id="shadow">dummy-shadow</div></div><div id="modal-wrapper"></div>'
      );
      document.body.innerHTML = '';
      global.window = originalWindow;
      global.document['body'] = original;
    });
  });

  describe('ModalProvider', () => {
    const HookEsc = ({ componentRef, closeMock }) => {
      const hookResult = useEscOnPress(componentRef, closeMock);
      return <div>{hookResult}</div>;
    };

    const TestComponent = ({ closeMock, noRef }) => {
      const elementRef = React.createRef();
      return (
        <div ref={elementRef}>
          <HookEsc
            componentRef={!noRef ? elementRef : null}
            closeMock={closeMock}
          />
        </div>
      );
    };

    test('addEventListener er lagt til og keydown på andre key trigger ingenting', () => {
      const map1 = {};
      const listenerMock = jest.fn((event, callback) => {
        map1[event] = callback;
      });
      window.addEventListener = listenerMock;

      const closeMock = jest.fn();
      mount(<TestComponent closeMock={closeMock} />);

      map1.keydown({ code: 'Enter' });
      expect(closeMock).toHaveBeenCalledTimes(0);
    });

    test('addEventListener er lagt til og keydown på Escape kaller onClose funksjonen', () => {
      const map2 = {};
      const listenerMock = jest.fn((event, callback) => {
        map2[event] = callback;
      });
      window.addEventListener = listenerMock;

      const closeMock = jest.fn();
      mount(<TestComponent closeMock={closeMock} />);

      map2.keydown({ code: 'Escape' });
      expect(closeMock).toHaveBeenCalledTimes(1);
    });

    test('uten Ref så registreres det ikke noe addEventListener for keydown', () => {
      const map3 = {};
      const listenerMock = jest.fn((event, callback) => {
        map3[event] = callback;
      });
      window.addEventListener = listenerMock;

      const closeMock = jest.fn();
      mount(<TestComponent closeMock={closeMock} noRef />);

      expect(map3.keydown).toBe(undefined);
    });
  });
});
