// import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
// import CoachesDetails from './pages/coaches/CoachDetails.vue';
// import ContactForm from './pages/requests/ContactForm.vue';
// import CoachRegistration from './pages/coaches/CoachRegistration.vue';
// import RequestsList from './pages/requests/RequestsList.vue';
// import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const CoachesDetails = () => import('./pages/coaches/CoachDetails.vue');
const ContactForm = () => import('./pages/requests/ContactForm.vue');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue');
const RequestsList = () => import('./pages/requests/RequestsList.vue');
const UserAuth = () => import('./pages/auth/UserAuth.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachesDetails,
      props: true,
      children: [
        { path: 'contact', component: ContactForm }, // /coaches/a1/contact "Contact with a specific coach"
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    { path: '/request', component: RequestsList, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

// Denied access to some page depend on the authentication
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
