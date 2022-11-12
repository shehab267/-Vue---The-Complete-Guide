<template>
  <base-card>
    <h2>Register as a coach now!</h2>
    <CoachFormVue></CoachFormVue
  ></base-card>
</template>

<script>
import CoachFormVue from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachFormVue,
  },
};
</script>
