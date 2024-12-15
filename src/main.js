import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style/index.scss";
import "./chart.js";
import router from "./router";
import VCalendar from "v-calendar";
import "v-calendar/style.css";

import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(VCalendar, {})
  .mount("#app");
