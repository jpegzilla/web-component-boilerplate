import elements from './components/index.mjs'

elements.forEach(({ name, element }) => {
  if (customElements.get(name)) {
    console.warn(
      'trying to define a custom element that has already been defined. check component exports!'
    )

    return
  }

  if (!name || !element) {
    console.error(
      'trying to define a component object lacking either a name or an element. please ensure all component exports have a name and an element.'
    )

    return
  }

  if (name && element) customElements.define(name, element)
})
