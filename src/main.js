import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style/index.scss";
import "./chart.js";
import router from "./router";

createApp(App).use(router).mount("#app");
