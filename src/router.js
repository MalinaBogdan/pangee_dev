import { createWebHistory, createRouter } from "vue-router";

import GridLayout from "./pages/GridLayout.vue";
import PublishersPage from "./pages/PublishersPage.vue";
import OpenSource from "./pages/OpenSource.vue";
import FinancialsPage from "./pages/FinancialsPage.vue";
import InternalPage from "./pages/InternalPage.vue";
import EcommercePage from "./pages/EcommercePage.vue";
import ChatConfig from "./pages/ChatConfig.vue";
import MediaPage from "./pages/MediaPage.vue";
import CompaignPage from "./pages/CompaignPage.vue";

const routes = [
  { path: "/", component: GridLayout },
  { path: "/publishers", component: PublishersPage },
  { path: "/open-source", component: OpenSource },
  { path: "/financials", component: FinancialsPage },
  { path: "/chat-configuration", component: ChatConfig },
  { path: "/media", component: MediaPage },
  { path: "/compaign", component: CompaignPage },
  {
    path: "/internal:id",
    component: InternalPage,
    props: true,
  },
  {
    path: "/ecommerce:id",
    component: EcommercePage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
