<template>
  <section>
    <header>
      <h1>Assignment lec 08</h1>
    </header>
    <form>
      <active-user :userName="user.name" :userAge="user.age"></active-user>
      <user-data @add-data="setUserData"></user-data>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Shehab Alhawari",
        age: 24,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age, // put '+' before age to convert String to Number
      };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
input {
  margin: 5px;
}
</style>
