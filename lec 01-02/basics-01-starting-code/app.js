const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and leanr Vue!",
      courseGoalB: "Master Vue!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomMethod = Math.random();
      if (randomMethod < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
}).mount("#user-goal");
