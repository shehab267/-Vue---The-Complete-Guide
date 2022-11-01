<template>
  <base-container title="Vuex" v-if="userIsAuth">
    <the-counter></the-counter>
    <change-counter></change-counter>
    <button @click="addOne">Add 10</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    UserAuth,
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
  computed: {
    ...mapGetters(['userIsAuth']),
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
