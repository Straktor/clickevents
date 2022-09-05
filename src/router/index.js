import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExampleTeamView from "../views/ExampleTeamView.vue";

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
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/exampleTeam",
    name: "exampleTeam",
    component: ExampleTeamView,
  },
  {
    path: "/exampleplanning/team/:name",
    name: "exampleplanning",
    component: ExampleTeamView,
  },
  {
    path: "/eggs",
    name: "egg",
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
