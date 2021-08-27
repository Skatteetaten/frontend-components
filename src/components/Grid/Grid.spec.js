import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Grid } from '.';

function oppsettFullDOM(props) {
  return mount(
    <Grid {...props}>
      <Grid.Row rowSpacing={Grid.SPACE_LARGE}>
        <Grid.Col lg={4}>4</Grid.Col>
        <Grid.Col lg={4} />
        <Grid.Col lg={4}>4</Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col lg={4}>4</Grid.Col>
        <Grid.Col lg={4} />
        <Grid.Col lg={4}>4</Grid.Col>
      </Grid.Row>
    </Grid>
  );
}

describe('Grid komponent', () => {
  it('matcher snapshot ', () => {
    const wrapper = oppsettFullDOM();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renderer Grid med riktig markup ', () => {
    const wrapper = oppsettFullDOM({});

    expect(wrapper.exists('GridCol')).toEqual(true);
    expect(wrapper.exists('GridRow')).toEqual(true);
    expect(wrapper.find('GridRow').first().prop('rowSpacing')).toEqual('24px');
  });
});
