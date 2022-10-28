<template>
  <div class="container">
  <users-list></users-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animateBlock }"></div>
    <button @click="animationActivation">Animate</button>
  </div>
  <div class="container">
    <transition name="btn-fade" mode="out-in">
      <button @click="showUsers" v-if="!userIsVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paraVisible">This is Sometime shows ...</p>
    </transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue';
export default {
  components: {
    UsersList,
  },
  data() {
    return {
      animateBlock: false,
      dialogIsVisible: false,
      paraVisible: false,
      userIsVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log('beforeEnter');
      // console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.02;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      console.log('afterEnter');
      // console.log(el);
      console.log(`${'-'.repeat(20)}`);
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      // console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);
      let round = 1;

      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.02;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave() {
      console.log('afterLeave');
      // console.log(el);
      console.log(`${'-'.repeat(20)}`);
    },
    showUsers() {
      this.userIsVisible = true;
    },
    hideUsers() {
      this.userIsVisible = false;
    },
    animationActivation() {
      this.animateBlock = !this.animateBlock;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    togglePara() {
      this.paraVisible = !this.paraVisible;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all 0.5s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.5s forwards linear;
}

.btn-fade-enter-from,
.btn-fade-leave-to {
  opacity: 0;
}
.btn-fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.btn-fade-leave-active {
  transition: opacity 0.3s ease-in;
}
.btn-fade-enter-to,
.btn-fade-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    opacity: 0.1;
    transform: translateX(0);
  }
  60% {
    opacity: 0.5;

    transform: translateX(-110px);
  }
  100% {
    opacity: 1;
    transform: translateX(-150px);
  }
}
</style>
