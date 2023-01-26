import {axiosAuth, axiosBase} from "@/plugins/axioses";

export const API_USER_INDEX = async (size = 10, page = 1, options) => {
  return await axiosBase().get('/api/user', {params:{size, page, ...options}})
    .then(response => {
      return response;
    });
}

export const API_USER_SHOW = async (id) => {
  return await axiosBase().get('/api/user/' + id)
    .then(response => {
      return response;
    });
}

export const API_USER_STORE = async (data) => {
  return await axiosAuth().post('/api/user', data)
    .then(response => {
      return response;
    });
}

export const API_USER_UPDATE = async (id, data) => {
  return await axiosAuth().put('/api/user/' + id, data)
    .then(response => {
      return response;
    });
}

export const API_USER_DESTROY = async (id) => {
  return await axiosAuth().delete('/api/user/' + id)
    .then(response => {
      return response;
    });
}

export const API_USER_ROLE_UPDATE = async (id, data) => {
  return await axiosAuth().put('/api/user/' + id, data)
    .then(response => {
      return response;
    });
}
