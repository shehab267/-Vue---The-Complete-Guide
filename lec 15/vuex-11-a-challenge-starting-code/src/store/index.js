import { createStore } from 'vuex';

import rootMutations from './mutation';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import productsModule from './modules/products';

const store = createStore({
  modules: {
    props: productsModule
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
