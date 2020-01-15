import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment (state, payload) {
      console.log('Mutacija increment');
      state.counter++;
    },
    decrement (state, payload) {
      console.log('Mutacija decrement');
      state.counter--;
    }
  },
  actions: {
    increment (context, payload) {
      console.log('Akcija increment');
      context.commit('increment', payload);
    },
    decrement (context, payload) {
      console.log('Akcija decrement');
      context.commit('decrement', payload);
    }
  },
  getters: {
    counter: (state) => () => state.counter
  }
})
