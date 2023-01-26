import {API_MOD_LIKE_STORE} from "@/api/ModLike";

export default {
  namespaced: true,
  state:{},
  getters:{},
  actions:{
    action_store({}, mod_id){
      return API_MOD_LIKE_STORE({mod_id})
        .then(response => {
          return response;
        })
        .catch(error=>{
          console.log(error.response)
        });
    }
  },
  mutations:{}
}
