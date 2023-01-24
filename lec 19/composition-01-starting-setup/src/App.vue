<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
  </section>
</template>

<script setup>
// import { ref } from 'vue'; // for simple cases
import { reactive } from 'vue'; // Complex case with nested data (Objects, arrays)

// const userName = ref('Maximilian');
const user = reactive({
  name: 'Maximilian',
  age: 31,
});

setTimeout(() => {
  // userName.value = 'Max';
  // user.value.age = 25; //with ref
  user.name = 'Shehab';
  user.age = 25;
}, 2000);
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
