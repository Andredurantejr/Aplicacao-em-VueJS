import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/posts",
    name: "posts",
    component: () => import("./components/ListPostAxios")
  },
  {
    path: "/posts/:id",
    name: "post-details",
    component: () => import("./components/PostTest")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/GetPostsAxion")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;