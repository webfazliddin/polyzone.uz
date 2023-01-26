
export default {
  namespaced: true,
  state: {
    loading: true,
  },
  getters: {
    loading: (state) => {
      return state.loading
    },
  },
  actions: {
    actionLoading({commit}, loading = false) {
      commit('setLoading', loading)
    },
  },
  mutations: {
    setLoading(state, loading = false) {
      state.loading = loading;
    },
  },
  modules: {}
}
