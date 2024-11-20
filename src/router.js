import { createMemoryHistory, createRouter } from "vue-router";

import GridLayout from "./pages/GridLayout.vue";
import PublishersPage from "./pages/PublishersPage.vue";

const routes = [
  { path: "/", component: GridLayout },
  { path: "/publishers", component: PublishersPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
