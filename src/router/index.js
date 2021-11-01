import Vue from "vue";

import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Pages from "../pages/Pages.vue";
import List from "../pages/List.vue";
import Biaodan from "../pages/Biaodan.vue";
import Detail from "../pages/Detail.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        keepAlive: false,
      },
    },
    {
      path: "/pages",
      component: Pages,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: "/list",
      component: List,
      meta: {
        keepAlive: true,
        isshowcache: false,
      },
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail,
    },
    {
      path: "/biaodan",
      component: Biaodan,
      meta: {
        keepAlive: true,
      },
    },
  ],
});

export default router;
