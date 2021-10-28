import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { ModalProvider } from './ModalProvider';
import { useModalContext } from './ModalContext';

describe('ModalProvider', () => {
  const firstModalName = 'modal';
  const secondModalName = 'modal2';
  const thirdModalName = 'modal3';

  const HookResult = ({ result }) => {
    return <div>{result.toString()}</div>;
  };

  const HookContext = () => {
    const modalInstance = useModalContext();
    return (
      <HookResult
        result={modalInstance ? modalInstance : 'empty modal instance'}
      />
    );
  };

  const TestComponent = () => {
    return (
      <ModalProvider value={{}}>
        <HookContext />
      </ModalProvider>
    );
  };

  const getUpdatedHookResult = (wrapper) => {
    wrapper.update();
    return wrapper.find(ModalProvider).find(HookResult).prop('result');
  };

  test('modal list return correct array of modal names, and open() method can add new item/items to the modal list', () => {
    const wrapper = mount(<TestComponent />);

    let hookResult = wrapper
      .find(ModalProvider)
      .find(HookResult)
      .prop('result');

    expect(hookResult.list).toHaveLength(0);

    act(() => {
      hookResult.open(firstModalName);
    });

    hookResult = getUpdatedHookResult(wrapper);

    expect(hookResult.list).toHaveLength(1);
    expect(hookResult.list[0]).toEqual('modal');

    act(() => {
      hookResult.open(thirdModalName);
    });

    hookResult = getUpdatedHookResult(wrapper);

    expect(hookResult.list).toHaveLength(2);
    expect(hookResult.list).toEqual([firstModalName, thirdModalName]);
  });

  test('modal close() method can remove item/items from the modal list', () => {
    const wrapper = mount(<TestComponent />);

    let hookResult = wrapper
      .find(ModalProvider)
      .find(HookResult)
      .prop('result');

    act(() => {
      hookResult.open(firstModalName);
    });
    hookResult = getUpdatedHookResult(wrapper);

    act(() => {
      hookResult.open(secondModalName);
    });
    hookResult = getUpdatedHookResult(wrapper);

    expect(hookResult.list).toHaveLength(2);
    expect(hookResult.list).toEqual([firstModalName, secondModalName]);

    act(() => {
      hookResult.close(secondModalName);
    });
    hookResult = getUpdatedHookResult(wrapper);

    expect(hookResult.list).toHaveLength(1);
    expect(hookResult.list).toEqual([firstModalName]);
  });

  test('modal toggle() method can add/remove item/items to/from the modal list', () => {
    const wrapper = mount(<TestComponent />);

    let hookResult = wrapper
      .find(ModalProvider)
      .find(HookResult)
      .prop('result');

    act(() => {
      hookResult.toggle(firstModalName);
    });

    hookResult = getUpdatedHookResult(wrapper);
    expect(hookResult.list).toHaveLength(1);
    expect(hookResult.list).toEqual([firstModalName]);

    act(() => {
      hookResult.toggle(firstModalName);
    });
    hookResult = getUpdatedHookResult(wrapper);
    expect(hookResult.list).toHaveLength(0);
    expect(hookResult.list).toEqual([]);
  });

  test('modal closeAll() can clear the modal list', () => {
    const wrapper = mount(<TestComponent />);

    let hookResult = wrapper
      .find(ModalProvider)
      .find(HookResult)
      .prop('result');

    act(() => {
      hookResult.toggle(firstModalName);
    });

    hookResult = getUpdatedHookResult(wrapper);

    act(() => {
      hookResult.open(secondModalName);
    });

    hookResult = getUpdatedHookResult(wrapper);

    act(() => {
      hookResult.open(thirdModalName);
    });

    hookResult = getUpdatedHookResult(wrapper);

    expect(hookResult.list).toHaveLength(3);
    expect(hookResult.list).toEqual([
      firstModalName,
      secondModalName,
      thirdModalName,
    ]);
    act(() => {
      hookResult.closeAll();
    });

    hookResult = getUpdatedHookResult(wrapper);

    expect(hookResult.list).toHaveLength(0);
    expect(hookResult.list).toEqual([]);
  });

  test('modal isOpen() and isClose() return correct result', () => {
    const wrapper = mount(<TestComponent />);

    let hookResult = wrapper
      .find(ModalProvider)
      .find(HookResult)
      .prop('result');

    act(() => {
      hookResult.toggle(firstModalName);
    });

    hookResult = getUpdatedHookResult(wrapper);

    act(() => {
      hookResult.toggle(thirdModalName);
    });

    hookResult = getUpdatedHookResult(wrapper);

    expect(hookResult.list).toHaveLength(2);
    expect(hookResult.isOpen(firstModalName)).toBe(true);
    expect(hookResult.isOpen(secondModalName)).toBe(false);
    expect(hookResult.isOpen(thirdModalName)).toBe(true);
    expect(hookResult.isClose(firstModalName)).toBe(false);
    expect(hookResult.isClose(secondModalName)).toBe(true);
    expect(hookResult.isClose(thirdModalName)).toBe(false);
  });
});
