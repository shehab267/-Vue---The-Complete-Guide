const app = Vue.createApp({
  data() {
    return {
      name: "Shehab",
      age: 24,
      urlSrc: "https://source.unsplash.com/user/c_v_r/100x100",
    };
  },
  methods: {
    fevNum() {
      let randNum = Math.random();
      return randNum.toFixed(1);
    },
  },
}).mount("#assignment");
