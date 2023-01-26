export default {
  namespaced: true,
  state: {
    categories: [],
    search: null
  },
  getters: {
    categories(state) {
      return state.categories;
    },
    search(state) {
      return state.search;
    }
  },
  actions: {},
  mutations: {
    categoriesAdd(state, id) {
      state.categories.push(id);
      state.categories = [...state.categories];
    },
    categoriesRemove(state, id) {
      let newCategories = [...state.categories];
      let index = newCategories.indexOf(id);
      if (index !== -1) {
        newCategories.splice(index, 1);
      }
      state.categories = newCategories;
    },
    categoriesClear(state) {
      state.categories = [];
    },
    categoriesSync(state, data) {
      state.categories = data;
    },
    searchSync(state, data) {
      state.search = data;
    }
  }
}
