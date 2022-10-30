import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamFooter from './pages/TeamFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, // We could use "alias: '/' ", but it dosen't change the URL.
    {
      name: 'teams',
      path: '/teams',
      meta: { needAuth: true },
      components: { default: TeamsList, footer: TeamFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('Users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    { path: '/:notFound(.*)', component: NotFound },
    // { path: '/:notFound(.*)', redirect: '/teams' } // -Should be at last, -Not found page 'NOT Professional'
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(_, _2, savedPosition);
// - Using '_' indicators means I need to get these argments in order to reach the third one 
    // SavePosition only Works when we go back the previos page
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

//  Navigation guard 'Global'
router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  // if (to.meta.needAuth) {
  //   next();
  // } else {
  //   next();
  // }
  next();
});

router.afterEach(function (to, from) {
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
