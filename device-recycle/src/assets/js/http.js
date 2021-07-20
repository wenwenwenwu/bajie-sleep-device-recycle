import Vue from "vue";
import Router from "../../router/index";
import Store from "../../store/index";
import axios from "axios";
import { CacheTool } from "@js/cache-tool.js";
import { Loading } from "element-ui";

axios.defaults.baseURL = BASE_URL;

var loading = null;

// interceptors是拦截器
// 所有的request，都会先进入该方法
axios.interceptors.request.use(config => {
  loading = Loading.service({
    background: "rgba(0,0,0,0.1)"
  });
  const loginInfo = CacheTool.getLoginInfo();
  if (loginInfo) {
    if (config.headers) {
      config.headers.token = loginInfo.token;
      config.headers.uid = loginInfo.uid;
    } else {
      config.headers = {
        token: loginInfo.token,
        uid: loginInfo.uid,
      };
    }
  }
  return config;
});

//所有的response，都会先进入该方法
axios.interceptors.response.use(
  response => {
    loading.close();
    const code = response.data.code;
    switch (code) {
      case 0:
        return Promise.resolve(response.data.data);
      case 10010:
      case 10004:
        CacheTool.removeLoginInfo();
        Store.commit("removeAccountInfo");
        Store.commit("saveIsMainLeftSlim", false);
        Store.commit("saveSelectedModuleIndex", 0);
        Store.commit("saveSelectedHospitalIndex", 0);
        Router.push({ path: "/login" });
      default:
        const errorMSG = getWebErrorMsg(response.data);
        return Promise.reject(errorMSG);
    }
  },
  error => {
    loading.close();
    if (error.response) {
      return Promise.reject(getWebErrorMsg(error.response.data));
    } else {
      return Promise.reject(MSG.serverError);
    }
  }
);

//为每一个vue对象添加一个附了值的$http属性($标记便于分辨)
Vue.prototype.$http = axios;
