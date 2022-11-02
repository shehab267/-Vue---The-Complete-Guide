import { createStore } from 'vuex';

import rootMutations from './mutation';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import productsModule from './modules/products';
import cartsModule from './modules/carts';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartsModule,
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
