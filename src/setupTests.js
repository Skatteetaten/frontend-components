import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './components/utils/loadTheme';

configure({ adapter: new Adapter() });

function FormDataMock() {
  this.append = jest.fn();
}
global.FormData = FormDataMock;
