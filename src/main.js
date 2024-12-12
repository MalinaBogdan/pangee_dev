import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style/index.scss";
import "./chart.js";
import router from "./router";

import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
