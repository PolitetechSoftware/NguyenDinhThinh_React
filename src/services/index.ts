/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const instance = axios.create({
  timeout: 500000,
});

// Interceptor cho request
instance.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho response
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // const token = getAuthenticator();

      // return axios
      //   .post('http://url', {
      //     token: token,
      //   })
      //   .then((res) => {
      //     if (res.status === 200) {
      //       localStorage.setItem('token', res.data.token);
      //       axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      //       return axios(originalRequest);
      //     }
      //   });
    }
    return Promise.reject(error);
  }
);

export default instance;
