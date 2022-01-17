import renderer from 'react-test-renderer';
import { render } from 'react-dom';

export const matches = (children) =>
  expect(renderer.create(children).toJSON()).toMatchSnapshot();

export class DummyWebComp extends HTMLElement {
  mountPoint;

  constructor() {
    super();
  }

  connectedCallback() {
    this.mountComponent();
  }

  mountComponent() {
    this.mountPoint = document.createElement('div');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(this.mountPoint);
    render(<div id="shadow">{'dummy-shadow'}</div>, this.mountPoint);
  }
}
