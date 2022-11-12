import { createStore } from 'vuex';

import coacheModules from './modules/coaches/index';

const store = createStore({
  modules: {
    coaches: coacheModules,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  // mutations: {},
  // actions: {},
  getters: {
    //  Make ID hard code for now till fetch with cloud
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
