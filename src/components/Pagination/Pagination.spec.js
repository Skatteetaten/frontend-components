import React from 'react';
import { Pagination, getSlidingWindowEdges } from '../index';
import { matches } from '../utils/test-utils';
import { mount } from 'enzyme';

function oppsettFullDOM(props) {
  const Wrapper = (wrapperProps) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    return (
      <Pagination
        {...wrapperProps}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    );
  };

  return mount(<Wrapper {...props} />);
}

describe('Pagination komponent', () => {
  it('matcher snapshot', () => {
    matches(
      <Pagination
        currentPage={1}
        onPageChange={() => jest.fn()}
        total={15}
        pageSize={5}
      />
    );
  });

  it('skal rendre visningsoppsummering rett', () => {
    let wrapper = mount(<Pagination total={18} pageSize={7} currentPage={1} />);

    expect(
      wrapper.find('[data-testid="pagination-oppsummering"]').text()
    ).toEqual('Viser 1-7 av 18');

    wrapper = mount(<Pagination total={18} pageSize={7} currentPage={2} />);
    expect(
      wrapper.find('[data-testid="pagination-oppsummering"]').text()
    ).toEqual('Viser 8-14 av 18');

    wrapper = mount(<Pagination total={18} pageSize={7} currentPage={3} />);
    expect(
      wrapper.find('[data-testid="pagination-oppsummering"]').text()
    ).toEqual('Viser 15-18 av 18');
  });

  it('skal rendre i henhold til props', () => {
    const wrapper = oppsettFullDOM({
      ariaLabelNavigationLink: 'Go to page ',
      ariaLabelNavigationLinkActive: 'Current page, Page ',
      total: 15,
      pageSize: 5,
    });
    const firstPageLink = wrapper
      .find('ul')
      .last()
      .find('li')
      .first()
      .find('button');
    const lastPageLink = wrapper
      .find('ul')
      .last()
      .find('li')
      .last()
      .find('button');
    expect(firstPageLink.prop('aria-label')).toEqual('Current page, Page 1');
    expect(firstPageLink.prop('aria-current')).toEqual(true);
    expect(lastPageLink.prop('aria-label')).toEqual('Go to page 3');
    expect(lastPageLink.prop('aria-current')).toEqual(false);
  });
  it('skal endre aktiv side på klikk', () => {
    const wrapper = oppsettFullDOM({
      total: 15,
      pageSize: 5,
    });
    const firstPageLink = wrapper
      .find('ul')
      .last()
      .find('li')
      .first()
      .find('button');
    const lastPageLink = wrapper
      .find('ul')
      .last()
      .find('li')
      .last()
      .find('button');
    expect(firstPageLink.prop('aria-current')).toEqual(true);
    expect(lastPageLink.prop('aria-current')).toEqual(false);

    wrapper
      .find('ul')
      .last()
      .find('li')
      .last()
      .find('button')
      .simulate('click');
    expect(
      wrapper
        .find('ul')
        .last()
        .find('li')
        .first()
        .find('button')
        .prop('aria-current')
    ).toEqual(false);
    expect(
      wrapper
        .find('ul')
        .last()
        .find('li')
        .last()
        .find('button')
        .prop('aria-current')
    ).toEqual(true);
  });
  it('getSlidingWindowEdges() skal resturne riktig start og slutt basert på input', () => {
    let range = getSlidingWindowEdges(1, 12, 4, 2);
    expect(range.startPage).toEqual(1);
    expect(range.endPage).toEqual(2);
    range = getSlidingWindowEdges(16, 100, 5, 5);
    expect(range.startPage).toEqual(14);
    expect(range.endPage).toEqual(18);
  });
  it('skal genere en side dersom total er mindre enn pageSize', () => {
    let wrapper = oppsettFullDOM({
      total: 17,
      pageSize: 50,
    });
    expect(wrapper.find('ul').last().find('li').length).toEqual(1);
    wrapper = oppsettFullDOM({
      total: 32,
      pageSize: 20,
    });
    expect(wrapper.find('ul').last().find('li').length).toEqual(2);
    expect(
      wrapper
        .find('ul')
        .last()
        .find('li')
        .first()
        .find('button')
        .prop('aria-current')
    ).toEqual(true);
  });
});
