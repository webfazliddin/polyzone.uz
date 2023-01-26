import { API_USER_INDEX, API_USER_SHOW, API_USER_UPDATE } from "@/api/User";

export default {
  namespaced: true,
  state: {
    list: [],
    topRatingList: [],
    listById: {}
  },
  getters: {
    list(state) {
      return state.list;
    },
    topRatingList(state) {
      return state.topRatingList;
    },
    listById(state) {
      return state.listById;
    }
  },
  actions: {
    action_index({ commit }, params) {
      return API_USER_INDEX(params.size || 1, params.page || 10, {sort:'time', ...params})
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
    action_index_rating({ commit }, size = 10, page = 1) {
      API_USER_INDEX(size, page, {sort:'rating'})
        .then(response => {
          if (response.status === 200) {
            commit('setTopRatingList', response.data.data)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    action_index_show({ commit }, id) {
      return API_USER_SHOW(id)
        .then(response => {
          if (response.status === 200) {
            commit('setlistById', { id, data: response.data.data })
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    action_index_update({ commit }, id, data) {
      return API_USER_UPDATE(id, data)
        .then(response => {
          if (response.status === 200) {
            commit('setListById', { id, data: response.data.data })
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
  },
  mutations: {
    setList(state, data) {
      state.list = data;
    },
    setTopRatingList(state, data) {
      state.topRatingList = data;
    },
    setlistById(state, { id, data }) {
      state.listById[id] = data;
    }
  }
}
