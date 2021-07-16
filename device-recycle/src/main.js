import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@css/style.scss";
import "@js/htmlFontSize.js";

import Picker from "vant";
import Popup from "vant";

import "vant/lib/picker/style";
import "vant/lib/popup/style";

Vue.use(Picker);
Vue.use(Popup);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
