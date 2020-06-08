import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Table, IconButton, Grid } from '../index';

const data = [
  {
    Måned: 'Januar',
    Beløp: 100,
    Dekningsgrad: '100%',
    Avkastning: '1000',
  },
  {
    Måned: 'Februar',
    Beløp: 100,
    Dekningsgrad: '50%',
    Avkastning: '500',
  },
  {
    Måned: 'Mars',
    Beløp: 100,
    Dekningsgrad: '20%',
    Avkastning: '2000',
  },
  {
    Måned: 'April',
    Beløp: 100,
    Dekningsgrad: '30%',
    Avkastning: '1055',
  },
];

const columns = [
  {
    name: 'Måned',
    fieldName: 'month',
  },
  {
    name: 'Beløp',
    fieldName: 'amount',
    alignment: 'right',
  },
  {
    name: 'Dekningsgrad',
    fieldName: 'coverage',
    alignment: 'right',
  },
  {
    name: 'Avkastning',
    fieldName: 'revenue',
    alignment: 'right',
  },
];

const content = (data, close) => (
  <div>
    <p>
      <strong>{data.Måned}</strong>
    </p>

    <Grid>
      <Grid.Row>
        <Grid.Col lg={12}>
          <p>Her kommer redigerbart innhold</p>
        </Grid.Col>
        <Grid.Col lg={3}>
          <div>
            <IconButton
              onClick={close}
              title="Angre"
              id="closeEditMode"
              circle
              icon="Cancel"
            />{' '}
          </div>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
);

function oppsettMount(props) {
  return mount(<Table {...props} />);
}

describe('Table komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettMount({ data, columns });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('rendrer Table med riktig props', () => {
    const wrapper = oppsettMount({
      data,
      columns,
      editableRows: true,
      id: 'tableid',
      className: 'tableClass',
      editableContent: 'Editerbart innhold',
    });

    const tableWrapper = wrapper.find('Table > div');
    const tableRow = wrapper.find('TableRow').first();

    expect(tableWrapper.prop('id')).toEqual('tableid');
    expect(tableWrapper.prop('className')).toContain('tableClass');
    expect(tableRow.prop('editableRows')).toEqual(true);
    expect(tableRow.prop('editableContent')).toEqual('Editerbart innhold');
  });

  it('rendrer Table med riktig antall rader ', () => {
    const wrapper = oppsettMount({ data, columns });

    expect(wrapper.find('TableRow').length).toEqual(4);
  });

  it('rendrer Table med editerbare rader ', () => {
    const wrapper = oppsettMount({ data, columns, editableRows: true });
    const tableRow = wrapper.find('TableRow');

    expect(wrapper.find('thead').exists('button.editbutton')).toEqual(false);
    expect(tableRow.at(1).exists('button.editButton')).toEqual(true);
    expect(tableRow.at(2).exists('button.editButton')).toEqual(true);
  });

  it('viser editerbart innhold når editeringsknapp for en tabellrad klikkes ', () => {
    const wrapper = oppsettMount({
      data,
      columns,
      editableRows: true,
      editableContent: content,
    });

    const editButton = wrapper
      .find('TableRow')
      .first()
      .find('IconButton')
      .first();

    expect(wrapper.html()).not.toContain('Her kommer redigerbart innhold');
    editButton.simulate('click');
    expect(wrapper.html()).toContain('Her kommer redigerbart innhold');
  });

  it('når en tabellrad er i editeringsmodus skal det ikke være mulig å editere øvrige rader ', () => {
    const wrapper = oppsettMount({
      data,
      columns,
      editableRows: true,
      editableContent: content,
    });

    const editButton = wrapper
      .find('TableRow')
      .first()
      .find('IconButton')
      .first();

    editButton.simulate('click');

    wrapper.find('.editButton').forEach((node) => {
      expect(node.prop('disabled')).toEqual(true);
    });
  });
});
