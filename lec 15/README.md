# VueX

## Install needed libarary

install vuex `npm install --save vuex@next`

## Lessons

#### 1] Store

- create store at main.js
- **multible store** can be used by init new store with all properties then merge it to the main store using **_modules with identifier_**

```
const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
});
```

#### 2] Mutations

- take methods (state, payload) and only works as **_Synchronous_**

```
  mutations: {
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
},
```

- callback with commit('mutation[name]')

```
   addOne() {
    this.$store.commit('increase', { value: 10 });
    // -another way to commit
    this.$store.commit({
      type: 'increase',
      value: 10,
    });
  },
```

#### 2] getters

- like mutations can have state and getters

```
  getters: {
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
    },
  },
```

- CallBack

```
    counter() {
      return this.$store.getters.normalizedCounter;
    },
```

##### [NOTE]

###### Actions can use _asynchronous code_. In the meantime mutations, getters Can't

#### 3] Actions

- action get an object as an argument (context), it has a commits a mutation using commit, We can pass an object if the is more arguments

```
  actions: {
    increment(context) {
      ti
      context.commit('increment');
    },
  },
```

- CallBack like mutation, but using _dispatch_ insted of _commit_

```
  addOne() {
      // this.$store.dispatch ('increase', { value: 10 });
      //* -another way to dispatch
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
  },
```

#### 4] Mappimg

- **mapGetters**
  insted drlilling to store to get the finalCounter we can **import mapGetters from 'vuex'** in the **_computed component_** and push the lastProp we want to access

  ```
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      // counter() {
      //   return this.$store.getters.normalizedCounter;
      // },
      ...mapGetters(['normalizedCounter']),
    },
  };
  ```

  ###### Alternative way to defined mapGetters using object insted array in the sake of using **_alies names_**

  ```
    ...mapGetters({
      inc: 'increment',
      increase: 'increase',
    }),
  ```

- **mapActions**
  used as same mapGetters but in **_methods components_**

  ```
  import { mapActions } from 'vuex';

  export default {
  methods: {
  ...mapActions(['increase', 'increment']),
  },
  ```

  Now we can triggered actions name in elements insted of methods

  ###### Alternative way to defined mapAction using object insted array in the sake of using **_alies names_**

  ```
    ...mapActions({
      inc: 'increment',
      increase: 'increase',
    }),
  ```

#### 5] NameSpacing Modules

We can namespacing modules by adding `namespaced: true `
Then we have to use the name we assign for the module for calling back (mutations, getters, actions) in the coponents

- **access the Vuex prop by using stored name before**
  ###### Ex: `return this.$store.getters.['numbers/normalizedCounter'];`
  ` type: numbers/increase`
- **Using Maps:**
  ` ...mapGetters('numbers', ['finalCounter'])`
