import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)
let iTuneApi = Axios.create({
  baseURL: 'https://itunes.apple.com'
})
export default new Vuex.Store({
  state: {
    searchResults: []
  },
  mutations: {
    setResults(state, songs) {
      state.searchResults = songs
    }
  },
  actions: {
    search({ commit, dispatch }, query) {
      iTuneApi.get('search?&term=' + query)
        .then(res => commit('setResults', res.data))
    }
  }
})
