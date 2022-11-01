<template>
  <button @click="login" v-if="!userIsAuth">Login</button>
  <button @click="logout" v-if="userIsAuth">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },
  computed: {
    ...mapGetters(['userIsAuth']),
  },
};
</script>
