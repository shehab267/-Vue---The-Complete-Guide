<template>
  <h2>Manage Goals</h2>
  <div>
    <input type="text" ref="goal" />
    <teleport to="body">
      <button @click="setGoal">Set Goal</button>
      <error-alert v-if="inputIsInvalid">
        <h3>Input Is Invalid</h3>
        <p>Please enter a GOAL</p>
        <button @click="closeError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enterdValue = this.$refs.goal.value;
      if (enterdValue === "") {
        this.inputIsInvalid = true;
      }
    },
    closeError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
