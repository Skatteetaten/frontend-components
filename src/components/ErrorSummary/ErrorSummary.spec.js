import React from 'react';
import { mount } from 'enzyme';
import { ErrorSummary } from '.';
import { TextField } from '../TextField';
import { matches, DummyWebComp } from '../utils/test-utils';

function oppsettMount(props, children) {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
  const holder = document.createElement('div');
  document.body.appendChild(holder);
  return mount(
    <div>
      <TextField
        id={'input_adresse'}
        label={'Adresse'}
        errorMessage={'Du må legge til en adresse'}
      />
      <TextField
        id={'input_postkode'}
        label={'Postnummer'}
        errorMessage={'Du må legge til en postkode'}
      />
      <TextField
        id={'input_poststed'}
        label={'Poststed'}
        errorMessage={'Du må legge til et poststed'}
      />
      <ErrorSummary {...props}>{children}</ErrorSummary>
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

  it('Skal kalle onClick dersom den er angitt', async () => {
    const onClickMock = jest.fn();
    const wrapper = oppsettMount({
      onClick: onClickMock,
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

    wrapper.find('li').at(1).find('a').simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('Setter fokus på riktig inputfelt når link blir trykket på og at onClick ikke er angitt', () => {
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

    expect(wrapper.find('h3').text()).toEqual(
      'For å gå videre må du rette opp i følgende:'
    );
    wrapper.find('li').at(1).find('a').simulate('click');
    expect(document.activeElement.id).toBe(
      wrapper.find('input').at(1).getDOMNode().id
    );
    wrapper.find('li').at(2).find('a').simulate('click');
    expect(document.activeElement.id).toBe(
      wrapper.find('input').at(2).getDOMNode().id
    );
  });

  it('Setter fokus på inputfelt i egen shadowRoot når link blir trykket på og at shadowRootNode er angitt', async () => {
    const original = global.document['body'];
    window.customElements.define('webcomp-test', DummyWebComp);
    document.body.innerHTML = '<webcomp-test></webcomp-test>';

    const holder = document.createElement('div');

    const element = document.querySelector('webcomp-test');
    element.shadowRoot.appendChild(holder);

    const wrapper = mount(
      <div>
        <TextField
          id={'input_postkode'}
          label={'Postnummer'}
          errorMessage={'Du må legge inn postnummer.'}
        />
        <ErrorSummary
          shadowRootNode={element.shadowRoot}
          title={'For å gå videre må du rette opp i følgende'}
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
      </div>,
      { attachTo: holder }
    );
    wrapper.find('li').at(1).find('a').simulate('click');
    expect(element.shadowRoot.activeElement.id).toBe(
      wrapper.find('input').getDOMNode().id
    );
    global.document['body'] = original;
  });

  it('Skal ikke vise ErrorSummary hvis ingen feil eller children finnes', () => {
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

  it('Skal vise children hvis de finnes', () => {
    const wrapper = oppsettMount(
      {
        title: 'For å gå videre må du rette opp i følgende:',
        errors: undefined,
      },
      <p>test child</p>
    );

    expect(wrapper.find('p').text()).toBe('test child');
  });
});
