import { Base, html } from './utils/index.mjs'

/**
 * a basic component to demonstrate usage. feel free to
 * delete or modify this!
 * @extends Base
 */
class Example extends Base {
  static name = 'example-component'

  constructor() {
    super()

    this.id = Example.name
  }

  connectedCallback() {
    this.innerHTML = html`<div>this is an example component!</div>`
  }
}

export default { name: Example.name, element: Example }
