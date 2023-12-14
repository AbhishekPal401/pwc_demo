import axios from "axios";
import * as actions from "./actions";
import { baseUrl } from "./url.js";

const api =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const {
      url,
      method,
      data,
      onStart,
      onSuccess,
      onFailed,
      onUploadProgress,
      onCancel,
    } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const {
        credentials: { credentials },
      } = getState();

      let headers = {
        "Content-Type": "application/json",
      };

      if (credentials && credentials.data && credentials.data.token) {
        headers = {
          "Content-Type": "application/json",
          token: credentials && credentials.data && credentials.data.token,
        };
      }

      const response = await axios.request({
        baseURL: baseUrl,
        url,
        method,
        data,
        headers,
        cancelToken: onCancel ? onCancel.token : undefined,
        onUploadProgress: onUploadProgress
          ? (progress) => onUploadProgress(progress.loaded / progress.total)
          : undefined,
      });

      // For Specific

      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      // For Specific
      if (onFailed) dispatch({ type: onFailed, payload: error.message });
    }
  };

export default api;
