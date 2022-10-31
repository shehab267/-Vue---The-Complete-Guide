<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <change-counter></change-counter>
    <button @click="addOne">Add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
  methods: {
    //  -- Using mutation -- 
    // addOne() {
    //   // this.$store.commit('increase', { value: 10 });
    //   //* -another way to commit
    //   this.$store.commit({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },

    //  -- Using Actions for asynchorouns -- 
    addOne() {
      // this.$store.dispatch ('increase', { value: 10 });
      //* -another way to dispatch 
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
