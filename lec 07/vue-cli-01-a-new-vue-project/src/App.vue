<template>
  <h2>Friends</h2>
  <ul>
    <friend-contact></friend-contact>
    <friend-contact></friend-contact>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "Manuel",
          name: "Manuel Lorenz",
          phone: "0123 4567 7889",
          email: "manuel@localhost.com",
        },
        {
          id: "julia",
          name: "julia Smith",
          phone: "0 952 5567 7889",
          email: "julia@localhost.com",
        },
      ],
    };
  },
};
</script>
