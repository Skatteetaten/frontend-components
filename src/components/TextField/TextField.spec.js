import React from 'react';
import { shallow, mount } from 'enzyme';
import { matches } from './../utils/test-utils';
import TextField from './TextField';

function oppsettShallow(props) {
  return shallow(<TextField {...props} />);
}

function oppsettFullDOM(props) {
  return mount(<TextField {...props} />);
}

describe('TextField komponent', () => {
  it('matcher snapshot', () => {
    matches(<TextField />);
  });

  it('rendrer TextFiled med default props', () => {
    const wrapper = oppsettShallow({});

    var input = wrapper.find('StyledTextFieldBase');
    expect(input.prop('inputSize')).toEqual('normal');
    expect(input.prop('editableWhenEmpty')).toEqual(false);
  });

  it('rendrer TextFiled med riktig props', () => {
    const wrapper = oppsettFullDOM({
      ariaLabel: 'textfield-ariaLabel',
      boldText: true,
      borderless: true,
      placeholder: 'textfield-placeholder',
      inputSize: 'large',
      className: 'textfield-classname'
    });
    const textfield = wrapper.find('.ms-TextField');
    const input = wrapper.find('input');

    expect(textfield.prop('className')).toContain('ms-TextField--borderless');
    expect(textfield.prop('className')).toContain('textfield-classname');
    expect(input.prop('placeholder')).toContain('textfield-placeholder');
    expect(wrapper.prop('boldText')).toEqual(true);
    expect(wrapper.prop('ariaLabel')).toEqual('textfield-ariaLabel');
    expect(wrapper.prop('inputSize')).toEqual('large');
  });

  it('rendrer TextFiled label', () => {
    const wrapper = oppsettFullDOM({
      label: 'textfied-label'
    });
    const label = wrapper.find('LabelBase');

    expect(label).toHaveLength(1);
    expect(label.html()).toContain('textfied-label');
  });

  it('rendrer TextFiled med hjelpetekst', () => {
    const wrapper = oppsettFullDOM({
      label: 'Fullt navn',
      help: 'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere'
    });
    const helpButton = wrapper.find('.ms-Icon');
    expect(helpButton.prop('data-icon-name')).toEqual('HelpOutline');

    helpButton.simulate('click');
    const callout = wrapper.find('StyledCalloutContentBase');
    expect(callout).toHaveLength(1);
    expect(callout.prop('color')).toEqual('lightGreen');
    expect(callout.prop('ariaLabel')).toEqual('Hjelpetekst');
    expect(callout.find('Popup').html()).toContain(
      'Vi trenger å vite navnet ditt dersom vi skal kontakte deg senere'
    );
  });

  it('rendrer TextFiled med hjelpetekst med markup', () => {
    const wrapper = oppsettFullDOM({
      label: 'Fullt navn',
      help: (
        <p>
          Vi trenger å vite navnet <em>ditt</em> dersom vi skal kontakte deg
          senere
        </p>
      )
    });
    const helpButton = wrapper.find('.ms-Icon');

    helpButton.simulate('click');
    const callout = wrapper.find('StyledCalloutContentBase');
    expect(callout).toHaveLength(1);
    expect(
      callout
        .find('Popup')
        .find('em')
        .html()
    ).toContain('ditt');
  });

  it('rendrer TextFiled med varseltekst', () => {
    const wrapper = oppsettFullDOM({
      label: 'Antall barn',
      warning: 'Er du sikker på at antall barn er riktig?'
    });
    const warningButton = wrapper.find('.ms-Icon');

    expect(warningButton.prop('data-icon-name')).toEqual('WarningOutline');

    warningButton.simulate('click');
    const callout = wrapper.find('StyledCalloutContentBase');
    expect(callout).toHaveLength(1);
    expect(callout.prop('color')).toEqual('beige');
    expect(callout.prop('ariaLabel')).toEqual('Varseltekst');
    expect(callout.find('Popup').html()).toContain(
      'Er du sikker på at antall barn er riktig?'
    );
  });

  it('rendrer TextFiled med varseltekst og markup', () => {
    const wrapper = oppsettFullDOM({
      label: 'Antall barn',
      warning: (
        <p>
          Er du sikker på at antall <strong>barn</strong> er riktig?'
        </p>
      )
    });
    const warningButton = wrapper.find('.ms-Icon');

    expect(warningButton.prop('data-icon-name')).toEqual('WarningOutline');

    warningButton.simulate('click');
    const callout = wrapper.find('StyledCalloutContentBase');
    expect(callout).toHaveLength(1);

    expect(
      callout
        .find('Popup')
        .find('strong')
        .html()
    ).toContain('barn');
  });

  it('rendrer TextFiled i lesemodus', () => {
    const wrapper = oppsettFullDOM({
      readOnly: true,
      editable: true
    });
    const editButton = wrapper.find('button.ms-Button--icon');
    let input = wrapper.find('input');

    expect(editButton).toHaveLength(1);
    const icon = editButton.find('.ms-Icon');
    expect(icon.prop('data-icon-name')).toEqual('Edit');
    expect(input.prop('readOnly')).toEqual(true);
    expect(wrapper.state('editMode')).toEqual(false);

    editButton.simulate('click');
    input = wrapper.find('input');
    expect(wrapper.state('editMode')).toEqual(true);
    expect(input.prop('readOnly')).toEqual(false);

    input.simulate('blur');
    input = wrapper.find('input');
    expect(input.prop('readOnly')).toEqual(true);
    expect(wrapper.state('editMode')).toEqual(false);
  });

  it('rendrer TextFiled med feilmelding', () => {
    const wrapper = oppsettFullDOM({
      errorMessage: 'Inntekståret må være etter 2008.'
    });

    expect(wrapper.html()).toContain('role="alert"');
  });

  it('rendrer TextFiled med prefix', () => {
    const wrapper = oppsettFullDOM({
      prefix: 'http://'
    });

    const prefix = wrapper.find('.ms-TextField-prefix');
    expect(prefix).toHaveLength(1);
    expect(prefix.html()).toContain('http://');
  });

  it('rendrer TextFiled med suffix', () => {
    const wrapper = oppsettFullDOM({
      suffix: '.com'
    });

    const suffix = wrapper.find('.ms-TextField-suffix');
    expect(suffix).toHaveLength(1);
    expect(suffix.html()).toContain('.com');
  });

  it('rendrer TextField med flere linjer', () => {
    const wrapper = oppsettFullDOM({
      multiline: true
    });

    expect(wrapper.find('textarea')).toHaveLength(1);
  });

  it('rendrer TextField med flere linjer med satt antall linjer som vises', () => {
    const wrapper = oppsettFullDOM({
      multiline: true,
      rows: 7
    });

    expect(wrapper.find('textarea').prop('rows')).toEqual(7);
  });

  it('skal kjøre on onChange når input feltet oppdateres', () => {
    const onChangeMock = jest.fn();
    const wrapper = mount(<TextField onChange={() => onChangeMock()} />);
    const input = wrapper.find('input');

    expect(onChangeMock.mock.calls.length).toBe(0);
    input.simulate('change', { target: { value: 'abc' } });
    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});

describe('MaskedTextField', () => {
  it('Virker med streng-verdi', () => {
    const value = 'AAAbbbCCC';
    const wrapper = mount(<TextField mask={'aaa aaa aaa'} value={value} />);

    expect(wrapper.prop('value')).toEqual(value);
  });

  it('Virker med tall-verdi', () => {
    const value = 123456789;
    const wrapper = mount(<TextField mask={'999 999 999'} value={value} />);

    expect(wrapper.prop('value')).toEqual(value);
  });

  it('Virker med undefined-verdi', () => {
    const value = undefined;
    const wrapper = mount(<TextField mask={'999 999 999'} value={value} />);

    expect(wrapper.prop('value')).toEqual(value);
  });

  it('Virker med tom streng', () => {
    const value = '';
    const wrapper = mount(<TextField mask={'999 999 999'} value={value} />);

    expect(wrapper.prop('value')).toEqual(value);
  });

  it('Virker med null-verdi', () => {
    const value = null;
    const wrapper = mount(<TextField mask={'999 999 999'} value={value} />);

    expect(wrapper.prop('value')).toEqual(value);
  });
});
