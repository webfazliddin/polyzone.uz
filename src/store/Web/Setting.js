export default {
  namespaced: true,
  state: {
    shopping_cart: [],
  },
  getters: {
    shopping_cart(state){
      return state.shopping_cart;
    }
  },
  actions: {
    action_shopping_cart_add({commit}, id){
      commit('set_shopping_cart_add', id)
    },
    action_shopping_cart_remove({commit}, id){
      commit('set_shopping_cart_remove', id)
    },
  },
  mutations: {
    set_shopping_cart_add(state, id){
      state.shopping_cart.push(id)
    },
    set_shopping_cart_remove(state, id){
      let index = state.shopping_cart.indexOf(id);
      state.shopping_cart.splice(index, 1)
    }
  }
}
