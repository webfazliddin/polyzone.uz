import {axiosBase} from "@/plugins/axioses";

export const API_MAIL_LEAVE_A_MESSAGE = async (data) => {
  return await axiosBase().post('/social/mail/leave_a_message', data)
    .then(response => {
      return response;
    });
}
