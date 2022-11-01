<template>
  <h3>{{ nor }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // },
    // ...mapGetters(['normalizedCounter']),
    ...mapGetters({
      nor: 'normalizedCounter',
    }),
  },
};
</script>
