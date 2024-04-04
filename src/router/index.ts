import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";
import { RouteNamesEnum } from "@/router/router.types";
import { AppLayoutsEnum } from "@/layouts/layouts.types";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      meta: {
        layout: AppLayoutsEnum.auth,
      },
      children: [
        {
            path: "",
            name: RouteNamesEnum.auth,
            component: () => import("@/views/auth/Login.vue")
        },
        {
            path: "register",
            name: RouteNamesEnum.register,
            component: () => import("@/views/auth/Register.vue")
        }
      ]
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
