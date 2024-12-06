import { createWebHistory, createRouter } from "vue-router";

import GridLayout from "./pages/GridLayout.vue";
import PublishersPage from "./pages/PublishersPage.vue";
import OpenSource from "./pages/OpenSource.vue";
import FinancialsPage from "./pages/FinancialsPage.vue";

const routes = [
  { path: "/", component: GridLayout },
  { path: "/publishers", component: PublishersPage },
  { path: "/open-source", component: OpenSource },
  { path: "/financials", component: FinancialsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
