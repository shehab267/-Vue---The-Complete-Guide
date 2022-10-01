<template>
  <div class="lable">
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }} Years</h3>
  </div>
</template>

<script>
export default {
  // props: ["user-name", "user-age"],
  props: {
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: Number,
      required: true,
    },
  },
};
</script>
