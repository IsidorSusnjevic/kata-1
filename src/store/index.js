import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    incrementM (state, payload) {
      state.counter++;
    },
    decrementM (state, payload) {
      state.counter--;
    }
  },
  actions: {
    increment (context, payload) {
      context.commit('incrementM', payload);
    },
    decrement (context, payload) {
      context.commit('decrementM', payload);
    }
  },
  getters: {
    counterG: (state) => {
			return () => {
				return state.counter;
			}
		}
  }
})
