# Slot

###### Slots works like Props

- props used for data
- Slots are ment to use for html code 'Template code'

## Notes:

**[ 1 ]** - If we have more than slot:

- One will be Default.
- renamed the Other slots and call them
  - _Main slot file_ `<slot name="###"></slot>`
  - CallBack file `<template v-slot:### ><template>`

### Styling Slots:

###### There is a very simple rule when working with slots and when sending content into other components slots, nothing changes about what you learned regarding scoped styles, availability of data and props **But** Vue.js will analyze, compile and evaluate this template before it sends to content to the other component so to say. <u> _So now the tags will be moved to the other components and there is nothing to be styling in the curretn component_. **Whatever between slot's template tags won't be rendering**</u>
