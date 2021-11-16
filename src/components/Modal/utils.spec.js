import React from 'react';

import { mount } from 'enzyme';

import { useEscOnPress } from './utils';

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
