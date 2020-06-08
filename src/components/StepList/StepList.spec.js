import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StepList, Step } from '../index';

function oppsettShallow(props) {
  return shallow(
    <StepList>
      <Step {...props} />
    </StepList>
  );
}

function oppsettMount(props) {
  return mount(
    <StepList>
      <Step {...props} />
    </StepList>
  );
}

describe('StepList komponent', () => {
  it('matcher snapshot', () => {
    const wrapper = oppsettMount();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('rendrer steplist uten at den kræsjer', () => {
    oppsettShallow({});
  });

  it('rendrer steplist med riktig props', () => {
    const wrapper = oppsettShallow({
      stepTitle: 'Jobber du?',
      stepId: 'step-1-1',
    });

    expect(wrapper.find('Step').prop('stepTitle')).toEqual('Jobber du?');
    expect(wrapper.find('Step').prop('stepId')).toEqual('step-1-1');
  });

  it('rendrer riktig html for for steg type "result"', () => {
    oppsettShallow({});

    const wrapper = oppsettMount({
      stepType: 'result',
    });

    expect(wrapper.find('Step').prop('stepType')).toEqual('result');
    expect(wrapper.find('Icon').length).toBe(1);
    expect(wrapper.exists('.stepLine')).toEqual(false);
    expect(wrapper.containsMatchingElement(<hr />)).toEqual(false);
  });

  it('rendrer riktig html for steg type "next"', () => {
    oppsettShallow({});

    const wrapper = oppsettMount({
      stepType: 'next',
    });

    expect(wrapper.exists('.stepNumber')).toEqual(false);
  });
});
