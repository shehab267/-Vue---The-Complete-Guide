const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    addOne(num) {
      // console.log("Add Running");
      this.number += num;
    },
  },
  watch: {
    checkValue() {
      const that = this;
      setTimeout(function () {
        that.number = 0;
      }, 5000);
    },
  },
  computed: {
    checkValue() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number > 37) {
        return "Too much!";
      } else {
        return this.number;
      }
    },
  },
});

app.mount("#assignment");
