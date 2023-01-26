import {axiosBase} from "@/plugins/axioses";

export const API_CURRENCY_INDEX = async (size = 10, page = 1, options) => {
  return await axiosBase().get('/api/currency', {params:{size, page, ...options}})
    .then(response => {
      return response;
    });
}

export const API_CURRENCY_SHOW = async (id) => {
  return await axiosBase().get('/api/currency/' + id)
    .then(response => {
      return response;
    });
}
