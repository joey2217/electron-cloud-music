import axios from "axios";

const request = axios.create({
  baseURL: 'https://netease-cloud-music-api-lyart-six.vercel.app/',
  // withCredentials: true,
  // timeout: 5000
})

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    // message.error(error.message || "Oops,出错了!");
    return Promise.reject(error);
  }
);

export default request;
