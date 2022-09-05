import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import { Member, Team, Event } from "@/models/teamModel";

import { httpsCallable } from "firebase/functions";
import { functions } from "@/helpers/firebaseInit.js";

Vue.use(Vuex);

// Create a new instance of Database.
const database = new VuexORM.Database();

// Register Models to Database.
database.register(Team);
database.register(Member);
database.register(Event);

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
  state: {
    selectedTeam: undefined,
  },
  mutations: {
    selectTeam(state, team) {
      state.selectedTeam = team;
    },
  },
  actions: {
    setSelectTeam({ commit }, team) {
      commit("selectTeam", team);
    },
    newEvent({ state }, eventValues) {
      if (state.selectedTeam) {
        // Get cloud function
        const createEvent = httpsCallable(functions, "createEvent");

        // Add teamId to the event values
        let eventPayload = {
          teamId: state.selectedTeam?.id,
          ...eventValues,
        };

        return createEvent(eventPayload);
      }
    },
  },
  getters: {
    selectedTeam(state) {
      return state.selectedTeam;
    },
  },
  modules: {},
});
