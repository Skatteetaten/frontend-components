import React from 'react';
import { mount } from 'enzyme';
import { matches } from './../utils/test-utils';
import { MessageBar } from '../index';

function oppsettFullDOM(props) {
  return mount(
    <MessageBar {...props}>
      <p>Satsene for denne avgiftstypen ble oppdatert 01.01.2017.</p>
    </MessageBar>
  );
}

describe('MessageBar komponent', () => {
  it('matcher snapshot', () => {
    matches(<MessageBar />);
  });

  it('renderer MessageBar med default props ', () => {
    const wrapper = oppsettFullDOM({});

    expect(wrapper.prop('actions')).toEqual(undefined);
    expect(wrapper.prop('type')).toEqual(0);
    expect(wrapper.prop('isMultiline')).toEqual(true);
    expect(wrapper.prop('onClick')).toEqual(undefined);
  });

  it('renderer "feil" MessageBar  ', () => {
    const wrapper = oppsettFullDOM({
      type: MessageBar.Type.error,
    });

    const icon = wrapper.find('IconBase');
    expect(icon.prop('iconName')).toEqual('ErrorBadge');
    expect(wrapper.prop('type')).toEqual(1);
  });

  it('renderer "varsel" MessageBar  ', () => {
    const wrapper = oppsettFullDOM({
      type: MessageBar.Type.warning,
    });

    const icon = wrapper.find('IconBase');
    expect(icon.prop('iconName')).toEqual('Info');
    expect(wrapper.prop('type')).toEqual(5);
  });

  it('renderer "strengt fortrolig" MessageBar  ', () => {
    const wrapper = oppsettFullDOM({
      type: MessageBar.Type.severeWarning,
    });

    const icon = wrapper.find('IconBase');
    expect(icon.prop('iconName')).toEqual('Warning');
    expect(wrapper.prop('type')).toEqual(3);
  });

  it('renderer "ok/positiv" MessageBar  ', () => {
    const wrapper = oppsettFullDOM({
      type: MessageBar.Type.success,
    });

    const icon = wrapper.find('IconBase');
    expect(icon.prop('iconName')).toEqual('Completed');
    expect(wrapper.prop('type')).toEqual(4);
  });

  it('renderer MessageBar med riktig props  ', () => {
    const wrapper = oppsettFullDOM({
      id: 'messagebar-id',
      className: 'messagebar-class',
      isMultiline: false,
    });

    expect(wrapper.prop('id')).toEqual('messagebar-id');
    expect(wrapper.prop('className')).toEqual('messagebar-class');
    expect(wrapper.exists('.ms-MessageBar-singleline')).toEqual(true);
  });

  it('renderer MessageBar på nytt når knapp trykkes ved bruk av "onRenderAfterDuration"', () => {
    //TODO: Teste at messagbar rendrer på nytt ved bruk av onRenderAfterDuration
  });
});
