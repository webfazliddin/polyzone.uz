import {axiosAuth, axiosBase} from "@/plugins/axioses";

export const API_CATEGORY_INDEX = async (size = 10, page = 1, options) => {
  return await axiosBase().get('/api/category', {params:{size, page, ...options}})
    .then(response => {
      return response;
    });
}

export const API_CATEGORY_STORE = async (data) => {
  return await axiosAuth().post('/api/category', data)
    .then(response => {
      return response;
    });
}

export const API_CATEGORY_SHOW = async (id) => {
  return await axiosBase().get('/api/category/' + id)
    .then(response => {
      return response;
    });
}

export const API_CATEGORY_UPDATE = async (id, data) => {
  return await axiosAuth().put('/api/category/' + id, data)
    .then(response => {
      return response;
    });
}

export const API_CATEGORY_DESTROY = async (id) => {
  return await axiosAuth().post('/api/category/' + id)
    .then(response => {
      return response;
    });
}
