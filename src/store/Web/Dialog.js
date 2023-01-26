export default {
  namespaced: true,
  state: {
    loginRegister: false
  },
  getters: {
    loginRegister(state){
      return state.loginRegister;
    }
  },
  actions: {
    action_login_register_hide({commit}){
      commit('setLoginRegister', false)
    },
    action_login_register_show({commit}){
      commit('setLoginRegister', true)
    }
  },
  mutations: {
    setLoginRegister(state, bool){
      state.loginRegister = bool;
    }
  }
}
