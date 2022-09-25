const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello! I am an alert box!!");
    },
    enterPress(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});
app.mount("#assignment");
