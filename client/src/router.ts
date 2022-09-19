import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../src/pages/HomePage.vue"),
    },
    {
      path: "/exercise",
      component: () => import("../src/pages/ExercisePage.vue"),
    },
    {
      path: "/sponsor",
      component: () => import("../src/pages/SponsorPage.vue"),
    },
  ],
});
export default router;
