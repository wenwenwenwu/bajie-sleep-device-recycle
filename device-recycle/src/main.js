import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@js/constant.js";
import "@css/style.scss";
import "@js/htmlFontSize.js";

//Vant组件
import { Popup } from "vant";
import { Area } from 'vant';
import { Toast } from 'vant';
import "vant/lib/popup/style";
import "vant/lib/area/style";
import "vant/lib/toast/style";
import { areaList } from "@vant/area-data";
Vue.use(Popup)
Vue.use(Area)
Vue.use(Toast)
window.AREA_LIST = areaList

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
