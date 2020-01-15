import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    changeCounter (state, payload) {
      // if(payload.sign == '+')
      //   state.counter++;
      // else
      //   state.counter--;


      // uslov ? tacno : netacno;

      payload.sign == '+' ? state.counter += 2 : state.counter -= 2;
    },
    increment (state) {
      state.counter++;
    },
    decrement (state) {
      state.counter--;
    }
  },
  actions: {
    changeCounter (context, payload) {
      context.commit('changeCounter', payload);
    },
    increment (context) {
      context.commit('increment');
    },
    decrement (context) {
      context.commit('decrement');
    }
  },
  getters: {
    counter: (state) => () => state.counter
  }
})
