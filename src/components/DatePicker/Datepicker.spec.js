import React from 'react';
import { matches } from '../utils/test-utils';
import { shallow, mount } from 'enzyme';

import { DatePicker } from '.';

function oppsettShallow(props) {
  return shallow(<DatePicker {...props} />);
}

function oppsettMount(props) {
  return mount(<DatePicker {...props} />);
}

describe('DatePicker komponent', () => {
  it('matcher snapshot', () => {
    matches(<DatePicker />);
  });

  it('rendrer datovelger med riktige props ', () => {
    const wrapper = oppsettShallow({
      id: 'my-id',
      label: 'Ukenummer',
      ariaLabel: 'Datovelger',
      placeholder: 'dd.mm.åååå',
      info:
        'Du kan skrive inn dato i feltet, eller velge en dato ved hjelp av datovelgeren, enten med mus eller bruk tastaturet',
    });

    const styledDatePickerBase = wrapper.find('StyledDatePickerBase');

    expect(styledDatePickerBase.prop('ariaLabel')).toEqual('Datovelger');
    expect(styledDatePickerBase.prop('placeholder')).toEqual('dd.mm.åååå');
    expect(wrapper.first().prop('id')).toEqual('my-id');
  });

  it('sender inn egendefinerete feilmeldinger når disse er satt ', () => {
    const wrapper = oppsettMount({
      isRequiredErrorMessage: 'Dette feltet er påkrevd i testen',
      isOutOfBoundsErrorMessage:
        'Datoen er ikke innenfor gyldig periode i testen',
      invalidInputErrorMessage: 'Ikke gyldig format i testen',
    });

    const datePicker = wrapper.find('DatePicker');

    expect(datePicker.prop('isRequiredErrorMessage')).toEqual(
      'Dette feltet er påkrevd i testen'
    );
    expect(datePicker.prop('isOutOfBoundsErrorMessage')).toEqual(
      'Datoen er ikke innenfor gyldig periode i testen'
    );
    expect(datePicker.prop('invalidInputErrorMessage')).toEqual(
      'Ikke gyldig format i testen'
    );
  });

  it('setter datovelger i readonly modus', () => {
    const wrapper = oppsettMount({
      readonlyMode: true,
    });
    expect(wrapper.find('StyledDatePickerBase').prop('disabled')).toEqual(true);
    expect(
      wrapper.find('TextFieldBase').find('input').prop('disabled')
    ).toEqual(true);
  });
  it('skal vise DatePicker på engelsk når language er satt til "en"', () => {
    const wrapper = oppsettMount({
      label: 'Enter date',
      language: 'en',
    });
    const styledDatePickerBase = wrapper.find('StyledDatePickerBase');
    expect(styledDatePickerBase.prop('strings').days).toEqual([
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]);
  });
  it('skal vise feilmelding dersom errorMessage er satt', () => {
    const wrapper = oppsettMount({
      label: 'Dato',
      errorMessage: 'Datoen som er satt er feil',
    });
    expect(wrapper.find('[role="alert"]')).toHaveLength(1);
    expect(wrapper.find('[role="alert"]').text()).toEqual(
      'Datoen som er satt er feil'
    );
  });
});
