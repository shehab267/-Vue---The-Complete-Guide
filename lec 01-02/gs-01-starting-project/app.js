/* ** Vue app ** */
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
      this.$refs.input.focus();
    },
  },
}).mount("#app");

/* ** Vanilla JS** */
// // Catch the elements

// const addBtn = document.querySelector("button");
// const addGoal = document.querySelector("input");
// const goalList = document.querySelector("ul");

// console.log(addGoal);

// addBtn.addEventListener("click", () => {
//   let inputValue = addGoal.value;
//   const listItem = document.createElement("li");
//   listItem.textContent = inputValue;
//   goalList.appendChild(listItem);
//   addGoal.value = "";
// });
