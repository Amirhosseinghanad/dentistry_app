import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000/API",
  withCredentials: true,
});

export const URL = "http://localhost:5000/";

API.interceptors.request.use(
  (res) => res,
  (error) => Promise.reject(error),
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 ||
      (error.response?.status === 403 && originalRequest._retry)
    ) {
      originalRequest._retry = true;
      try {
        const res = await API.post("/TOKEN/refresh-token", {
          withCredentials: true,
        });
        console.log(res);

        const newAccessToken = res.data.accessToken;
        console.log(newAccessToken);
        // اضافه کردن دوباره توکن به هدر
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return API(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

const http = {
  get: API.get,
  post: API.post,
  put: API.put,
  delete: API.delete,
  patch: API.patch,
};

export default http;
