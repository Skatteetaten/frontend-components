import renderer from 'react-test-renderer';

export const matches = (children) =>
  expect(renderer.create(children).toJSON()).toMatchSnapshot();
