const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  methods: {
    add(num) {
      console.log("Add Running");
      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log("Reduce Running");
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      console.log("Reset Running");
      this.name = "";
    },
  },
  computed: {
    fullName() {
      console.log("Full name Running");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return `${this.name} ${this.lastName}`;
    },
  },
});

app.mount("#events");
