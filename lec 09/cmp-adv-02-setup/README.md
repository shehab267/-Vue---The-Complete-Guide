# Slot

Slot callBack shortHand is "**#**" insted of '**v-slot:**'

###### Slots works like Props

- props used for data
- Slots are ment to use for html code 'Template code'

## Notes:

**[ 1 ]** - If we have more than slot:

- One will be Default.
- renamed the Other slots and call them
  - _Main slot file_ `<slot name="---"></slot>`
  - CallBack file `<template v-slot:--- ><template>`

**[ 2 ]** - we can add default element _'It'll appear if it's place is empty'_:

```
<header>
      <slot #header>
        <h2>The Default</h2>
      </slot>
    </header>
```

**[ 3 ]** - We can access slots:

- [EX] consoleLog slots using

```
<script>
export default {
  mounted() {
    console.log(this.$slots);
  },
};
</script>
```

###### We Can use the previos idea to whether we do receive data we can check whether we do receive data for a specific slot. And if we don't, we could use that information to not render a certain element `<header v-if="$slots.header">`

**[ 4 ]** - Scoped Slots lec [ 116 ]: 
  - slotsProps
  - Move data to throw slots

### Styling Slots:

###### There is a very simple rule when working with slots and when sending content into other components slots, nothing changes about what you learned regarding scoped styles, availability of data and props **But** Vue.js will analyze, compile and evaluate this template before it sends to content to the other component so to say. <u> _So now the tags will be moved to the other components and there is nothing to be styling in the curretn component_. **Whatever between slot's template tags won't be rendering**</u>

- The scope syle in the components afect the markup in the component, **but not the markup of any componen we might be sending our content to.**
  "So move element's style to Slot's Parent, So they will be styeling when vue moves them their'"
