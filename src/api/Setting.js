import {axiosAuth, axiosBase} from "@/plugins/axioses";

export const API_SETTING_INDEX = async () => {
  return await axiosBase().get('/api/setting')
    .then(response => {
      return response;
    });
}

export const API_SETTING_STORE = async (data) => {
  return await axiosAuth().post('/api/setting', data)
    .then(response => {
      return response;
    });
}

export const API_SETTING_SHOW = async (title) => {
  return await axiosBase().get('/api/setting/'+title)
    .then(response => {
      return response;
    });
}

export const API_SETTING_UPDATE = async (title, data) => {
  return await axiosAuth().put('/api/setting/' + title, {data:data})
    .then(response => {
      return response;
    });
}

export const API_SETTING_DESTROY = async (title) => {
  return await axiosAuth().post('/api/setting/' + title)
    .then(response => {
      return response;
    });
}

export const API_SETTING_AVATAR_LIST = async () => {
  return await axiosBase().get('/api/setting/avatar_list')
    .then(response => {
      return response;
    });
}
