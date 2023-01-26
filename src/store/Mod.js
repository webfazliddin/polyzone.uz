import {API_MOD_INDEX, API_MOD_SHOW} from "@/api/Mod";

export default {
  namespaced: true,
  state: {
    list: [],
    topRatingList: [],
    lastList: [],
    listById: {}
  },
  getters: {
    list(state) {
      return state.list;
    },
    topRatingList(state) {
      return state.topRatingList;
    },
    lastList(state) {
      return state.lastList;
    },
    listById(state) {
      return state.listById;
    }
  },
  actions: {
    action_index({commit}, params) {
      return API_MOD_INDEX(params.size || 1,params.page || 10,  params)
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
    action_index_rating({commit}, size = 10, page = 1) {
      return API_MOD_INDEX(size, page, {sort: 'rating'})
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
    action_index_last({commit}, size = 6, page = 1) {
      return API_MOD_INDEX(size, page, {sort: 'time'})
        .then(response => {
          if (response.status === 200) {
            commit('setLastList', response.data.data)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    action_show({commit}, id) {
      return API_MOD_SHOW(id)
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
      data.forEach(item => {
        state.listById[item.id] = item;
      })
    },
    setTopRatingList(state, data) {
      state.topRatingList = data;
      data.forEach(item => {
        state.listById[item.id] = item;
      })
    },
    setLastList(state, data) {
      state.lastList = data;
      data.forEach(item => {
        state.listById[item.id] = item;
      })
    },
    setListById(state, {id, data}) {
      state.listById[id] = data;
    }
  }
}
