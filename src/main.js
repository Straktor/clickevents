import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

// Import all components from ./components/BaseComponents

const files = require.context("./components/BaseComponents", true, /\.vue$/i);

files.keys().map((key) => {
  Vue.component(
    files(key).default.name ?? key.split("/").pop().split(".")[0],
    files(key).default
  );
});

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
