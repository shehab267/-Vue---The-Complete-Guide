<template>
  <section class="container">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="upgradeAge">Update Age</button>

    <div>
      <input type="text" placeholder="firstName" v-model="firstName" />
      <input type="text" placeholder="lastName" v-model="lastName" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'; // for simple cases
// import { reactive } from 'vue'; // Complex case with nested data (Objects, arrays)
// const name = ref('Maximilian');
const age = ref(20);
const firstName = ref('');
const lastName = ref('');
const name = computed(function () {
  return `${firstName.value} ${lastName.value}`;
});

watch(age, function (newValue, oldValue) {
  console.log(age.value);
  console.log(`Old Age: ${oldValue}`);
  console.log(`New Age: ${newValue}`);
});
// function setFirstName(event) {
//   firstName.value = event.target.value;
// }
// function setLastName(event) {
//   lastName.value = event.target.value;
// }

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
