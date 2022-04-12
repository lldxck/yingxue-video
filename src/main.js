import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import status from "constants/status";
import statusCode from "constants/statusCode";
import "plyr/dist/plyr.css";

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.prototype.$status = status;
Vue.prototype.$statusCode = statusCode;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
