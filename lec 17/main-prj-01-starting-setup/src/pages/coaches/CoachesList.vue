<template>
  <section><h3>FILTER</h3></section>
  <section>
    <h3>COACHES LIST</h3>
    <div class="container">
      <button>Refresh</button>
      <router-link to="/register">Register as a Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <p v-else>No Coaches Found!</p>
  </section>
</template>

<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>
