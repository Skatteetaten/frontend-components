import React from 'react';
import Table from '../../components/Table';

export function TableRenderer(_ref2) {
  const columns = [
    {
      name: 'Prop type',
      fieldName: 'prop',
      minWidth: 50,
      maxWidth: 100,
      isResizable: true
    },
    {
      name: 'Type',
      fieldName: 'type',
      minWidth: 50,
      maxWidth: 100,
      isResizable: true
    },
    {
      name: 'Default',
      fieldName: 'default',
      minWidth: 50,
      maxWidth: 100,
      isResizable: true
    },
    {
      name: 'Description',
      fieldName: 'description',
      minWidth: 200,
      maxWidth: 500,
      isResizable: true
    }
  ];
  const rows =
    _ref2.rows &&
    _ref2.rows.map(item => ({
      prop: item.name,
      type: item.type.name,
      default: (item.defaultValue && item.defaultValue.value) || '',
      description: item.description
    }));
  return <Table data={rows} columns={columns} />;
}

export default TableRenderer;
