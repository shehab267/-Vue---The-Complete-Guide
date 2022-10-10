<template>
  <ul>
    <li :class="{ poor: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ average: modelValue === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ great: modelValue === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  // v-model on custom Components needs to conenct with the component USING:
  // 1- "props: ['modelValue']"
  // 2- emits: ['update:modelValue']
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  // ** updating back the modelvalue at the main component
  // *** Or using modelValue insted of activeOption in
  // computed: {
  //   activeOption() {
  //     return this.modelValue;
  //   },
  // },
  methods: {
    activate(option) {
      // this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
    activeClass() {
      console.log(this.activeOption.value);
      return this.activeOption.value;
    },
  },
};
</script>

<style scoped>
.poor,
.poor button {
  border-color: rgb(189, 44, 0);
  color: rgb(155, 10, 0);
}
.average,
.average button {
  border-color: rgb(155, 155, 0);
  color: rgb(145, 155, 0);
}
.great,
.great button {
  border-color: rgb(65, 155, 0);
  color: rgb(13, 155, 0);
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 2px solid #ccc;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
