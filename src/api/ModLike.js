import {axiosAuth} from "@/plugins/axioses";

export const API_MOD_LIKE_INDEX = async (size = 10, page = 1, sort = 'time') => {
  return await axiosAuth().get('/api/mod_like', {params:{size, page}})
    .then(response => {
      return response;
    });
}

export const API_MOD_LIKE_STORE = async (data) => {
  return await axiosAuth().post('/api/mod_like', data)
    .then(response => {
      return response;
    });
}

export const API_MOD_LIKE_SHOW = async (id) => {
  return await axiosAuth().get('/api/mod_like/' + id)
    .then(response => {
      return response;
    });
}

export const API_MOD_LIKE_DESTROY = async (id) => {
  return await axiosAuth().post('/api/mod_like/' + id)
    .then(response => {
      return response;
    });
}
