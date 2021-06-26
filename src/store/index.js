import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    darkMode: false
  },
  mutations: {

    toggleDrawer (state) {
      state.drawer = !state.drawer
    },
    toggleDarkMode (state) {
      state.darkMode = !state.darkMode
    },
    Edit_Post (state, post) {
      state.post.forEach(p => {
        if (p.id === post.id) {
          // eslint-disable-next-line no-unused-expressions
          p - post
        }
      })
    }
  },
  actions: {
    async editPost ({ commit }, post) {
      // eslint-disable-next-line no-undef
      const response = await Api().put(`/posts/${post.id}`, post)
      const newPost = response.data.data.attributes
      commit('Edit_Post', newPost)
      return newPost
    }
  },
  modules: {
  }
})
