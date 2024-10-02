import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const authChildRoutes = (prefix) => [
  {
    path: "sign-in",
    name: prefix + ".sign-in",
    component: () => import("../pages/auth/SignInPage"),
  },
  {
    path: "sign-up",
    name: prefix + ".sign-up",
    component: () => import("../pages/auth/SignUpPage"),
  },
];

const diaryChildRoutes = (prefix) => [
  {
    path: "my-diaries",
    name: prefix + ".diaries",
    component: () => import("../pages/diary/DiariesListPage.vue"),
  },
  {
    path: "details",
    name: prefix + ".details",
    component: () => import("../pages/diary/DiaryDetailsPage.vue"),
  },
  {
    path: "new",
    name: prefix + ".new",
    component: () => import("../pages/diary/WriteDiaryPage.vue"),
  },
];

const routes = [
  {
    path: "",
    name: "home",
    meta: { requiredAuth: false },
    component: () => import("../pages/home/HomePage"),
  },
  {
    path: "/auth",
    name: "auth",
    meta: { requiredAuth: false },
    component: () => import("../pages/auth/AuthPage.vue"),
    children: authChildRoutes("auth"),
  },
  {
    path: "/profile",
    name: "profile",
    meta: { requiredAuth: true },
    component: () => import("../pages/user/UserProfilePage.vue"),
  },
  {
    path: "/diary",
    name: "diary-index",
    meta: { requiredAuth: false },
    component: () => import("../pages/diary/DiaryOverviewPage.vue"),
    children: diaryChildRoutes("diary"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes,
});

//Implementation of Global Guard
// Check authentication and authorization required before each request middleware
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.meta.requiredAuth;

  if (requiresAuth) {
    const authenticated = await isAuthenticated();
    if (!authenticated.status) {
      console.log("Authentication required!");
      // route to the login page
      return next({ path: "/auth/sign-in" });
      // toastify authentication required
    } else {
      // route to the forbidden page or route to home and throw a toast message
      console.log("Forbidden route for this user");
      return next({ path: "/" });
    }
  }

  // Reset setting
  await store.dispatch("setting/setIsSiteMenuActive", false);

  return next();
});

const isAuthenticated = async () => {
  let user = store.getters["auth/getUser"];
  if (!user) {
    return { status: false };
  }
  return { status: true, user };
};

export default router;
