import React from 'react';
import { UseScreen } from './ScreenPlugin';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

describe('Test av ScreenPlugin', () => {
  const TestHook = () => {
    const size = UseScreen();
    return (
      <div>
        {size.md && <span>Vises når skjermstørrelsen er 'md'</span>}
        {size.lt.md && (
          <span>Vises når skjermstørrelsen er mindre enn 'md'</span>
        )}
        {size.gt.md && (
          <span>Vises når skjermstørrelsen er større enn 'md'</span>
        )}
      </div>
    );
  };

  it('matcher snapshot', () => {
    const wrapper = shallow(<TestHook />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('skal gi riktig størrelse basert på skjermbredde', () => {
    const wrapper = mount(<TestHook />);
    expect(wrapper.html()).toEqual(
      "<div><span>Vises når skjermstørrelsen er større enn 'md'</span></div>"
    );

    act(() => {
      global.innerWidth = 500;
      window.dispatchEvent(new Event('resize'));
    });
    expect(wrapper.html()).toEqual(
      "<div><span>Vises når skjermstørrelsen er 'md'</span></div>"
    );

    act(() => {
      global.innerWidth = 200;
      window.dispatchEvent(new Event('resize'));
    });
    expect(wrapper.html()).toEqual(
      "<div><span>Vises når skjermstørrelsen er mindre enn 'md'</span></div>"
    );
  });
});
