/**
 * a base class that contains some useful utilities.
 * extend new components from this class.
 *
 * @extends HTMLElement
 */
class Base extends HTMLElement {
  addClass(className) {
    this.classList.add(className)
  }

  removeClass(className) {
    this.classList.remove(className)
  }

  toggleClass(className) {
    this.classList.toggle(className)
  }

  attr(name, val) {
    return val ? this.setAttribute(name, val) : this.getAttribute(name)
  }
}

export default Base
