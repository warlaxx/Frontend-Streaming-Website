import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/ComingSoon.vue"),
  },
  // {
  //   path: "/test",
  //   component: () => import("../pages/TestPage.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
