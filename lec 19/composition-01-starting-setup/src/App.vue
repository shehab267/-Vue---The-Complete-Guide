<template>
  <section class="container">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="upgradeAge">Update Age</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'; // for simple cases
// import { reactive } from 'vue'; // Complex case with nested data (Objects, arrays)

const name = ref('Maximilian');
const age = ref(20);
// const user = reactive({
//   name: 'Maximilian',
//   age: 31,
// });

function upgradeAge() {
  // user.age = 32;
  age.value = 32;
}
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
  background-color: rgb(255, 246, 238);
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
