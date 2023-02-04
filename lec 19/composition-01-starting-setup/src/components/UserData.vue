<template>
  <h2>{{ name }}</h2>
  <h3>{{ age }}</h3>

  <button @click="handleBtnClicked">{{ props.text }}</button>
</template>

<script setup>
import { computed, inject, defineProps, defineEmits } from 'vue';

// const props = defineProps(['name', 'age']);

const props = defineProps({
  // TODO  defineProps is compiler macro
  firstName: { type: String, default: '', required: true },
  lastName: { type: String, default: '' },
  // age: { type: Number, default: 0 },
  // Button text
  text: { type: String, default: 'No text Specified' },
});

let name = computed(function () {
  return props.firstName + ' ' + props.lastName;
});

const emit = defineEmits(['buttonClicked']);

const handleBtnClicked = () => {
  emit('buttonClicked', 32);
};

const age = inject('userAge');
</script>
