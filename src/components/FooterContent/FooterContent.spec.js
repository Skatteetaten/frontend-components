import React from 'react';
import { mount } from 'enzyme';
import { FooterContent, Grid } from '../index';
import { matches } from './../utils/test-utils';

function oppsettFullDOM(props) {
  return mount(
    <FooterContent>
      <Grid>
        <Grid.Row>
          <Grid.Col sm={12} lg={12} xl={3}>
            <FooterContent.Logo />
          </Grid.Col>
          <Grid.Col sm={12} lg={12} xl={3}>
            <b>Kontakt oss</b>
          </Grid.Col>
          <Grid.Col sm={12} lg={12} xl={3}>
            noreply@skatteetaten.no
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </FooterContent>
  );
}

describe('FooterContent komponent', () => {
  it('matcher snapshot ', () => {
    matches(<FooterContent />);
  });

  it('renderer FooterContent med riktig markup ', () => {
    const wrapper = oppsettFullDOM();

    expect(wrapper.find('Image').prop('alt')).toEqual('Skatteetaten logo');
    expect(wrapper.exists('.ms-Image-image')).toEqual(true);
    expect(wrapper.exists('.footer-decoration-svg')).toEqual(true);
    expect(wrapper.html()).toContain('Kontakt oss');
    expect(wrapper.html()).toContain('noreply@skatteetaten.no');
  });
});
