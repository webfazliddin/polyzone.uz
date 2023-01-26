import {axiosAuth, axiosBase} from "@/plugins/axioses";

export const API_AUTH_LOGIN = async (nick_name, password) => {
  return await axiosBase().post('/api/auth/login', {nick_name, password})
    .then(response => {
      return response;
    });
}

export const API_AUTH_ME = async () => {
  return await axiosAuth().get('/api/auth/me')
    .then(response => {
      return response;
    });
}

export const API_AUTH_LOGOUT = async () => {
  return await axiosAuth().post('/api/auth/logout')
    .then(response => {
      return response;
    });
}

export const API_AUTH_REFRESH = async () => {
  return await axiosAuth().post('/api/auth/refresh')
    .then(response => {
      return response;
    });
}

export const API_AUTH_REGISTER = async (data) => {
  return await axiosBase().post('/api/auth/register', data)
    .then(response => {
      return response;
    });
}

export const API_AUTH_UPDATE = async (data) => {
  return await axiosAuth().put('/api/auth/update', data)
    .then(response => {
      return response;
    });
}
