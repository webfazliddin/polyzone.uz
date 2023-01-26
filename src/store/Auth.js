import {API_AUTH_LOGIN, API_AUTH_LOGOUT, API_AUTH_ME, API_AUTH_REGISTER, API_AUTH_UPDATE} from "@/api/Auth";
import VueCookies from "@/plugins/vue-cookies";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    authentication: false
  },
  getters: {
    token: (state) => {
      return state.token
    },
    authentication: (state) => {
      return state.authentication
    },
    user: (state) => {
      return state.user
    },
    isAdmin: (state) => {
      let roles = state.user?.roles ?? [];
      return roles.includes('owner') || roles.includes('developer') || roles.includes('admin');
    }
  },
  actions: {
    login({commit}, {nick_name, password}) {
      return API_AUTH_LOGIN(nick_name, password)
        .then(response => {
          if (response.status === 200) {
            commit('setToken', response.data.data.token)
            commit('setUser', response.data.data.user)
            commit('setAuthentication', true)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },

    me({commit}) {
      return API_AUTH_ME()
        .then(response => {
          if (response.status === 200) {
            commit('setUser', response.data.data)
            commit('setAuthentication', true)
          }
          return response.data;
        })
        .catch(error => {
          console.log(error.response)
        });
    },

    register({commit}, data) {
      return API_AUTH_REGISTER(data)
        .then(response => {
          if (response.status === 200) {
            commit('setToken', response.data.data.token)
            commit('setUser', response.data.data.user)
            commit('setAuthentication', true)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },

    update({commit}, data) {
      return API_AUTH_UPDATE(data)
        .then(response => {
          if (response.status === 200) {
            commit('setUser', response.data.data)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },

    logout({commit}) {
      API_AUTH_LOGOUT().finally(() => {
        commit('setAuthentication', null);
      })
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      VueCookies.set('token', token);
    },
    setAuthentication(state, authentication) {
      state.authentication = authentication;
      if (!authentication) {
        state.token = null;
        state.user = null;
        VueCookies.remove('token');
      }
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  modules: {}
}
