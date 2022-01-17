import React from 'react';
import { mount } from 'enzyme';
import { matches } from './../utils/test-utils';
import { Tabs } from '.';
import { TabItem } from './TabItem';

function oppsettFullDOM(props) {
  return mount(
    <Tabs {...props}>
      <TabItem
        headerText="Tilgjengelige oppgaver"
        itemCount={23}
        itemKey="itemKey-1"
      >
        Innhold #1
      </TabItem>
      <TabItem headerText="Mine oppgaver" itemCount={2} itemKey="itemKey-2">
        Innhold #2
      </TabItem>
      <TabItem
        headerText="Andres oppgaver"
        itemIcon="Update"
        itemKey="itemKey-3"
      >
        Innhold #3
      </TabItem>
      <TabItem headerText="Nylig behandlet" itemCount={132} itemKey="itemKey-4">
        Innhold #4
      </TabItem>
    </Tabs>
  );
}

describe('Tabs komponent', () => {
  it('matcher snapshot', () => {
    matches(
      <Tabs>
        <TabItem
          headerText="Tilgjengelige oppgaver"
          itemCount={23}
          itemKey="itemKey-1"
        >
          Innhold #1
        </TabItem>
        <TabItem headerText="Mine oppgaver" itemCount={2} itemKey="itemKey-2">
          Innhold #2
        </TabItem>
        <TabItem
          headerText="Andres oppgaver"
          itemIcon="Update"
          itemKey="itemKey-3"
        >
          Innhold #3
        </TabItem>
      </Tabs>
    );
  });

  it('rendrer Tabs med riktig innhold', () => {
    const wrapper = oppsettFullDOM({});

    const tab1 = wrapper.find('CustomizedActionButton').at(0);
    const tab3 = wrapper.find('CustomizedActionButton').at(2);
    let content = wrapper.find('PivotItem');

    expect(wrapper.find('CustomizedActionButton')).toHaveLength(4);
    expect(tab1.find('.ms-Pivot-text').html()).toContain(
      'Tilgjengelige oppgaver'
    );
    expect(tab1.find('.ms-Pivot-count').html()).toContain(23);
    expect(tab1.prop('className')).toContain('is-selected');
    expect(content.find('div').html()).toContain('Innhold #1');
    expect(tab3.exists('IconBase')).toEqual(true);
  });

  it('oppdaterer innhold når TabItem blir klikket', () => {
    const wrapper = oppsettFullDOM({});

    let tab2 = wrapper
      .find('CustomizedActionButton')
      .at(1)
      .find('button.ms-Button--action');
    let content = wrapper.find('PivotItem');

    tab2.simulate('click');
    tab2 = wrapper
      .find('CustomizedActionButton')
      .at(1)
      .find('button.ms-Button--action');
    content = wrapper.find('PivotItem');

    expect(content.find('div').html()).toContain('Innhold #2');
    expect(tab2.prop('className')).toContain('is-selected');
  });
});
