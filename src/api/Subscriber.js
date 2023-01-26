import {axiosBase} from "@/plugins/axioses";

export const API_SUBSCRIBER_STORE = async (email) => {
  return await axiosBase().post('/api/subscriber', {email})
    .then(response => {
      return response;
    });
}
