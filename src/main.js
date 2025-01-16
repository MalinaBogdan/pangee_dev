import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style/index.scss";
import "./chart.js";
import router from "./router";
import VCalendar from "v-calendar";
import "v-calendar/style.css";
import axios from 'axios'
import VueAxios from 'vue-axios'

import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VCalendar, {})
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.mount("#app");
