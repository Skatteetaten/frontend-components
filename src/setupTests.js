import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import './components/utils/loadTheme';
import { format } from 'util';

React.useLayoutEffect = React.useEffect;
jest.mock('./components/utils/generateId');

configure({ adapter: new Adapter() });

function FormDataMock() {
  this.append = jest.fn();
}
global.FormData = FormDataMock;

const error = global.console.error;

global.console.error = function (...args) {
  error(...args);
  throw new Error(format(...args));
};
