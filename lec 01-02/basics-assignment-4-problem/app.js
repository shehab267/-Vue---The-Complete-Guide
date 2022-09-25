const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      paraVisible: true,
      stylePara: ''
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.paraVisible,
        hidden: !this.paraVisible,
      };
    },
  },
  methods: {
    toglPara() {
      this.paraVisible = !this.paraVisible;
    },
  },
});

app.mount("#assignment");
