import Vue from "vue";
import axios from "axios";
import { Toast } from "vant";

axios.defaults.baseURL = BASE_URL;

// interceptors是拦截器
// 所有的request，都会先进入该方法
axios.interceptors.request.use(config => {
  Toast.loading()
  config.headers = {
    "Access-Control-Allow-Origin":"*"
  }
  return config;
});

//所有的response，都会先进入该方法
axios.interceptors.response.use(
  response => {
    Toast.clear();
    const code = response.data.status;
    switch (code) {
      case 200:
        return Promise.resolve(response.data.data);
      default:
        return Promise.reject(response.data.message);
    }
  },
  error => {
    Toast.clear();
    if (error.response) {
      return Promise.reject(error.response.data);
    } else {
      return Promise.reject(MSG.serverError);
    }
  }
);

//为每一个vue对象添加一个附了值的$http属性($标记便于分辨)
Vue.prototype.$http = axios;
