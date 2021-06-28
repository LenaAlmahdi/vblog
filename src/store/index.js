import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    darkMode: false,
    loading: false,
    posts: JSON.parse(localStorage.getItem('posts'))
  },
  mutations: {
    toggleDrawer (state) {
      state.drawer = !state.drawer
    },
    toggleDarkMode (state) {
      state.darkMode = !state.darkMode
    },
    toggleLoading (state) {
      state.loading = !state.loading
    },
    setPosts (state, posts) {
      state.posts = posts
      localStorage.setItem('posts', JSON.stringify(posts))
    }
  },
  actions: {
  },
  modules: {

  }
})
