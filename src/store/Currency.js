import {API_CURRENCY_INDEX, API_CURRENCY_SHOW} from "@/api/Currency";

export default {
  namespaced: true,
  state: {
    list: [],
    listById: {}
  },
  getters: {
    list(state) {
      return state.list;
    },
    listById(state) {
      return state.listById;
    }
  },
  actions: {
    action_index({commit}, size = 100, page = 1, options) {
      return API_CURRENCY_INDEX(size, page, options)
        .then(response => {
          if (response.status === 200) {
            commit('setList', response.data.data)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    action_show({commit}, id) {
      return API_CURRENCY_SHOW(id)
        .then(response => {
          if (response.status === 200) {
            commit('setListById', {id, data: response.data.data})
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    }
  },
  mutations: {
    setList(state, data) {
      state.list = data;
    },
    setListById(state, {id, data}) {
      state.listById[id] = data;
    }
  }
}
