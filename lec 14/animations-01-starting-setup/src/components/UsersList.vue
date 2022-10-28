<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUserName(user)">
      {{ user }}
    </li>
  </transition-group>
  <div class="inputArea">
    <input type="text" ref="inputUserName" />
    <button @click="addUserName">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Alx'],
    };
  },
  methods: {
    addUserName() {
      const enteredUserName = this.$refs.inputUserName.value;
      this.users.unshift(enteredUserName);
    },
    removeUserName(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 1rem 0;
}
li {
  border: 1px solid #ccc;
  background-color: #eee;
  padding: 1rem;
  margin: 5px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
.inputArea {
  display: flex;
  flex-direction: column;
}
input {
  margin: 0.5rem;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translatex(0);
}
.user-list-leave-active {
  transition: all 1s ease-in;
  /* position property for leaving elements smoothly */
  position: absolute;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.user-list-move {
  transition: transform 0.5s ease;
}
</style>
