import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', component: null },
    { path: '/coachs', component: null },
    {
      path: '/coaches/:id',
      component: null,
      children: [
        { path: '/contact', component: null }, // /coaches/a1/contact "Contact with a specific coach"
      ],
    },
    { path: '/register', component: null },
    { path: '/request', component: null },
    { path: '/request', component: null },
    { path: '/:notFound(.*)', component: null },
  ],
});

export default router;
