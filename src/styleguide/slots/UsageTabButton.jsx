import React from 'react';
import Button from '../../components/Button/Button';

const UsageTabButton = props => {
  console.log(props);
  if (props.active) return <Button {...props}>Skjul API</Button>;
  return <Button {...props}>Se API</Button>;
};

export default UsageTabButton;
