import {axiosAuth, axiosBase} from "@/plugins/axioses";

export const API_MOD_INDEX = async (size = 10, page = 1, options) => {
  return await axiosBase().get('/api/mod', {params: {size, page, ...options}})
    .then(response => {
      return response;
    });
}

export const API_MOD_STORE = async (data) => {
  return await axiosAuth().post('/api/mod', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Origin": "*",
    }
  })
    .then(response => {
      return response;
    });
}

export const API_MOD_SHOW = async (id) => {
  return await axiosBase().get('/api/mod/' + id)
    .then(response => {
      return response;
    });
}

export const API_MOD_UPDATE = async (id, data) => {
  return await axiosAuth().put('/api/mod/' + id, data)
    .then(response => {
      return response;
    });
}

export const API_MOD_DESTROY = async (id) => {
  return await axiosAuth().delete('/api/mod/' + id)
    .then(response => {
      return response;
    });
}
