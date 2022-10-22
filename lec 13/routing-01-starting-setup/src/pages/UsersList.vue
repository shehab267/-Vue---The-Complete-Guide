<template>
  <button @click="confirmBtn">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmBtn() {
      // do something
      this.$router.push('/teams');
    },
    saveChanges() {
      // save changes before moving out the page
      this.changesSaved = true;
      // console.log(this.changesSaved);
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('UsersList Cmp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp beforeRouteLeave');
    console.log(to, from);
    // save changes before moving out the page
    if (this.changesSaved) {
      console.log(this.changesSaved);
      next();
    } else {
      const userWantsToleave = confirm(
        'Are you Sure? You forget saveing Data!'
      );
      
      next(userWantsToleave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
