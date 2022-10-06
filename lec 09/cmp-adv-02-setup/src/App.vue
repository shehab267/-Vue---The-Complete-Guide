<template>
  <div>
    <the-header></the-header>

    <button @click="setSelectCompo('active-goals')">ActiveGoals</button>
    <button @click="setSelectCompo('manage-goals')">ManageGoals</button>
    <!-- <active-goals></active-goals>
    <manage-goals></manage-goals> -->
    <keep-alive>
      <component :is="selectComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectComponent: "active-goal",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectCompo(cmp) {
      this.selectComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
