import {API_CATEGORY_INDEX, API_CATEGORY_SHOW} from "@/api/Category";

export default {
  namespaced: true,
  state: {
    list: [],
    listNotChildrenCategory: [],
    listForModFilter: [],
    listForNavbar: [],
    listById: {},
  },
  getters: {
    list(state) {
      return state.list;
    },
    listNotChildrenCategory(state) {
      return state.listNotChildrenCategory;
    },
    listForModFilter(state) {
      return state.listForModFilter;
    },
    listForNavbar(state) {
      return state.listForNavbar;
    },
    listById(state) {
      return state.listById;
    },
  },
  actions: {
    action_index({commit}, size = 100, page = 1, options) {
      return API_CATEGORY_INDEX(size, page, options)
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
    action_index_not_children_category({commit}, size = 100, page = 1, options) {
      return API_CATEGORY_INDEX(size, page, {...options, children_category_has: 0})
        .then(response => {
          if (response.status === 200) {
            commit('setListNotChildrenCategory', response.data.data)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    action_index_for_mod_filter({commit}, size = 10, page = 1) {
      return API_CATEGORY_INDEX(size, page,{parent_category_has: 0}) // {parent_category_has:0}
        .then(response => {
          if (response.status === 200) {
            commit('setListForModFilter', response.data.data)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    action_show({commit}, id) {
      return API_CATEGORY_SHOW(id)
        .then(response => {
          if (response.status === 200) {
            commit('setListById', {id, data: response.data.data})
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    action_index_for_navbar({commit}) {
      return API_CATEGORY_INDEX(20, 1, {parent_category_has: 0})
        .then(response => {
          if (response.status === 200) {
            commit('setListForNavbar', response.data.data)
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
    setListNotChildrenCategory(state, data) {
      state.listNotChildrenCategory = data;
    },
    setListForModFilter(state, data) {
      state.listForModFilter = data;
    },
    setListForNavbar(state, data) {
      state.listForNavbar = data;
    },
    setListById(state, {id, data}) {
      state.listById[id] = data;
    }
  }
}
