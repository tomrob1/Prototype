import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    getRooms: state => {
      return state.results
    }
  },
  actions: {
  },
  modules: {
  }
})
