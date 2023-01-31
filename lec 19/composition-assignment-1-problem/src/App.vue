<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseData.showMessage">{{ courseData.courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="showMsg">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>
<script setup>
// import { reactive } from 'vue';
import { reactive } from 'vue';

// const courseGoal = ref('Learn Vue.js');
// const showMessage = ref(true);
const courseData = reactive({
  courseGoal: 'Learn Vue.js',
  showMessage: false,
});

function showMsg() {
  // showMessage.value = !showMessage.value;
  // courseData.value.showMessage = !courseData.value.showMessage;
  courseData.showMessage = !courseData.showMessage;
}
// const state = reactive({
//   courseGoal: 'Learn Vue.js',
//   showMessage: true,
// });

// function showMsg() {
//   state.showMessage = !state.showMessage;
// }
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
