import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './components/pages/AllUsers.vue';
import CourseGoals from './components/pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals },
  ],
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// isReady => tell the app when the router is evaluated which page should be loaded 'Returns  Promise'
router.isReady().then(function () {
  app.mount('#app');
});
