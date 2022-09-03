import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import { Member, Team, Event } from "@/models/teamModel";

Vue.use(Vuex);

// Create a new instance of Database.
const database = new VuexORM.Database();

// Register Models to Database.
database.register(Team);
database.register(Member);
database.register(Event);

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
