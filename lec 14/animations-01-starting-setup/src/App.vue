<template>
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
    <transition name="para">
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
export default {
  data() {
    return {
      animateBlock: false,
      dialogIsVisible: false,
      paraVisible: false,
      userIsVisible: false,
    };
  },
  methods: {
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

.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 0.5s ease-in;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.para-leave-active {
  transition: all 0.5s ease-out;
}
.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
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
