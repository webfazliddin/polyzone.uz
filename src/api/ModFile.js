import {axiosAuth} from "@/plugins/axioses";
import fileDownload from "js-file-download";

export const API_MOD_FILE_DOWNLOAD = async (id, filename = 'model.zip', mime = 'zip') => {
  return await axiosAuth().get(`/api/mod_file/download/${id}`, { responseType: 'blob' })
    .then((response) => {
      return fileDownload(response.data, filename, mime);
    });
}
