import { createRouter, createWebHistory } from "vue-router";

import NotFoundPage from "./views/NotFoundPage.vue";

const routes = [
  { path: "/", component: () => import('./views/HomePage.vue'), name: "Home" },
  { path: "/about", component: () => import('./views/AboutPage.vue'), name: "About" },
  { path: "/blogs/:id", component: () => import("./views/BlogPage.vue"), name: "Blog" },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
