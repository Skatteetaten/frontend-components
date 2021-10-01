import React from 'react';
import { mount } from 'enzyme';
import { ErrorSummary } from '.';
import { TextField } from '../TextField';
import { matches } from '../utils/test-utils';

function oppsettMount(props) {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  const holder = document.createElement('div');
  document.body.appendChild(holder);
  return mount(
    <div>
      <TextField
        id={'input_postkode'}
        label={'Postnummer'}
        errorMessage={'Du må legge inn postnummer.'}
      />
      <ErrorSummary {...props} />
    </div>,
    { attachTo: holder }
  );
}

describe('ErrorSummary komponent', () => {
  it('matcher snapshot', () => {
    matches(
      <ErrorSummary
        title={'For å gå videre må du rette opp i følgende:'}
        errors={[
          { id: 'input_adresse-input', error: 'Du må legge til en adresse' },
          {
            id: 'input_postkode-input',
            error: 'Du må legge til en postkode',
          },
          {
            id: 'input_poststed-input',
            error: 'Du må legge til et poststed',
          },
        ]}
      />
    );
  });

  it('Setter fokus på inputfelt for postkode når link blir trykket på', () => {
    const wrapper = oppsettMount({
      title: 'For å gå videre må du rette opp i følgende:',
      errors: [
        { id: 'input_adresse-input', error: 'Du må legge til en adresse' },
        {
          id: 'input_postkode-input',
          error: 'Du må legge til en postkode',
        },
        {
          id: 'input_poststed-input',
          error: 'Du må legge til et poststed',
        },
      ],
    });
    const input = wrapper.find('input');
    expect(wrapper.find('h3').text()).toEqual(
      'For å gå videre må du rette opp i følgende:'
    );
    wrapper.find('li').at(1).find('a').simulate('click');
    expect(document.activeElement).toBe(input.getDOMNode());
  });

  it('Skal ikke vise ErrorSummary hvis ingen feil finnes', () => {
    const wrapper = oppsettMount({
      title: 'For å gå videre må du rette opp i følgende:',
      errors: [],
    });
    expect(wrapper.find('h3').exists()).toBeFalsy();
    expect(wrapper.find('li').exists()).toBeFalsy();
  });
  it('Skal ikke vise ErrorSummary hvis errors er undefined', () => {
    const wrapper = oppsettMount({
      title: 'For å gå videre må du rette opp i følgende:',
      errors: undefined,
    });
    expect(wrapper.find('h3').exists()).toBeFalsy();
    expect(wrapper.find('li').exists()).toBeFalsy();
  });
});
