const app = Vue.createApp({
  data() {
    return {
      listVisible: true,
      enteredValue: "",
      tasks: [],
    };
  },
  computed: {
    btnCaption() {
      if (this.listVisible && this.tasks.length === 0) {
        return "The List is Empty";
      } else if (this.listVisible) {
        return "Hide List";
      } else {
        return "Show List";
      }
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
      this.enteredValue = "";
    },
    tasksList() {
      this.listVisible = !this.listVisible;
    },
  },
});

app.mount("#assignment");
