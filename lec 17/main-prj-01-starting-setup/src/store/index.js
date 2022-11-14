import { createStore } from 'vuex';

import coacheModules from './modules/coaches/index';
import requestsModules from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coacheModules,
    requests: requestsModules,
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
