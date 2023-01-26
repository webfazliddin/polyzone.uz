import {API_SUBSCRIBER_STORE} from "@/api/Subscriber";

export default {
  namespaced: true,
  state: {},
  getters: {},
  actions: {
    async action_send_email({commit}, {email}) {
      return API_SUBSCRIBER_STORE(email)
        .then(response => {
          return response;
        })
        .catch(error => {
          console.log('Subscriber Sending Error: ' + error)
        });
    },
  },
  mutations: {},
  modules: {}
}
