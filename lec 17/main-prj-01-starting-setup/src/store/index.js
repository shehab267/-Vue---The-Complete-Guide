import {createStore} from 'vuex';

import CoacheModules from './modules/coaches/index';

const store = createStore({
  modules: {
    coaches: CoacheModules,
  },
  state() {
    // return {};
  },
  // mutations: {},
  // actions: {},
  // getters: {},
});

export default store;
