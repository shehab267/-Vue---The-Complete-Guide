<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // move to home page after supmitting
      // router.push() => can go backword from history
      // router.replace() => can NOT go back "More proper for forms"
      this.$router.replace('/coaches');
    },
  },
};
</script>
