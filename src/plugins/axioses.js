import axios from 'axios';
import Auth from "../store/Auth";
import Dialog from "@/store/Web/Dialog";
import {addNotification} from "@/helpers/Notification"
import VueCookies from "@/plugins/vue-cookies";

const axiosLogging = (error) => {
  addNotification(
    error.response.data.message || error.message,
    (error.response.status < 500) ? 'warning' : 'error',
    3
  );
  if(error.response.status === 401){
    Auth.state.token = null;
    Auth.state.authentication = false;
    VueCookies.remove('token');
  }
  return error.response;
}

export const axiosBase = () => {
  const newAxios = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
  });
  newAxios.interceptors.response.use(
    response => response,
    error => axiosLogging(error)
  );
  newAxios.interceptors.request.use(
    (config)=>{
      config.headers["Accept"] = "application/json";
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Content-Type"] = "application/json";
    return config;
    },
    request => request,
  )
  return newAxios;
}

export const axiosAuth = () => {
  if (Auth.state.authentication) {
    const newAxios = axios.create({
      baseURL: process.env.VUE_APP_BASE_API,
      headers: {
        Authorization: `Bearer ${Auth.state.token}`
      }
    });
    newAxios.interceptors.response.use(
      response => response,
      error => axiosLogging(error)
    );
    return newAxios;
  } else {
    Dialog.state.loginRegister = true;
  }
}
