import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/planning/team/:name",
    name: "planning",
    component: HomeView,
  },
  {
    path: "/exampleTeam",
    name: "exampleTeam",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ExampleTeamView.vue"),
  },
  {
    path: "/eggs",
    name: "egg",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EggView.vue"),
  },
  {
    path: "/eggs/team/:name",
    name: "eggteams",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EggView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
