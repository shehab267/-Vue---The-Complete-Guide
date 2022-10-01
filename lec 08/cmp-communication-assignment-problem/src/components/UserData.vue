<template>
  <div>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="Your Name" v-model="enteredName" />
      <input type="text" placeholder="Your Age" v-model="enteredAge" />
      <button>Submit Data</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>
