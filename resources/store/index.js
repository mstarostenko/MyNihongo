import Vuex from 'vuex'
import patterns from './modules/patterns'

/**
 * This our global state for our app.
 */
const createStore = () => new Vuex.Store({
  state: {
  },

  mutations: {
  },

  modules: {
    patterns
  }
})

export default createStore
