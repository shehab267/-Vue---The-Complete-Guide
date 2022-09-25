<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetais">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone }}</li>
      <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "Manuel",
        name: "Manuel Lorenz",
        phone: "0123 4567 7889",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetais() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
