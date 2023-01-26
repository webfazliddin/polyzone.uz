import {API_SETTING_AVATAR_LIST, API_SETTING_INDEX, API_SETTING_UPDATE} from "@/api/Setting";

export default {
  namespaced: true,
  state: {
    list: {},
    listAvatar: []
  },
  getters: {
    list(state) {
      return state.list;
    },
    listAvatar(state) {
      return state.listAvatar;
    }
  },
  actions: {
    action_index({commit}) {
      API_SETTING_INDEX()
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
    action_update({commit}, {title: title, data: data}) {
      return API_SETTING_UPDATE(title, data)
        .then(response => {
          commit('setOne', response.data.data);
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    action_index_avatar({commit}) {
      API_SETTING_AVATAR_LIST()
        .then(response => {
          commit('setListAvatar', response.data.data)
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
  },
  mutations: {
    setList(state, data) {
      let list = {};
      data.forEach(item => {
        list[item.title] = item.data;
      })
      state.list = list;
    },
    setOne(state, {title, data}) {
      state.list[title] = data;
    },
    setListAvatar(state, data){
      state.listAvatar = data;
    }
  }
}
