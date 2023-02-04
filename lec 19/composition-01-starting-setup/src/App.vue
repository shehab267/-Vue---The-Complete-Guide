<template>
  <section class="container">
    <user-data
      text="upgradeAge"
      :first-name="firstName"
      :last-name="lastName"
      @buttonClicked="upgradeAge"
    ></user-data>

    <div>
      <input type="text" placeholder="firstName" v-model="firstName" />
      <input type="text" placeholder="lastName" v-model="lastName" />
      <!-- <input type="text" placeholder="lastName" ref="setlastNameInput" /> -->
      <button @click="setLastNameFun">Set Name</button>
    </div>
  </section>
</template>

<script setup>
import UserData from './components/UserData.vue';
import { ref, watch, provide } from 'vue'; // for simple cases

const age = ref(20);
const firstName = ref('');
const lastName = ref('');
// const setlastNameInput = ref('Samir');

// const name = computed(function () {
//   return `${firstName.value} ${lastName.value}`;
// });

provide('userAge', age)

watch(age, function (newValue, oldValue) {
  console.log(age.value);
  console.log(`Old Age: ${oldValue}`);
  console.log(`New Age: ${newValue}`);
});

const upgradeAge = (newAge) => {
  // alert('Child BTN was clicked');
  age.value = newAge;
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
