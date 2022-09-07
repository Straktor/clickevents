import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import { Member, Team, Event, Egg } from "@/models/teamModel";

import { httpsCallable } from "firebase/functions";
import { functions } from "@/helpers/firebaseInit.js";

Vue.use(Vuex);

// Create a new instance of Database.
const database = new VuexORM.Database();

// Register Models to Database.
database.register(Team);
database.register(Member);
database.register(Event);
database.register(Egg);

export default new Vuex.Store({
  plugins: [VuexORM.install(database)],
  state: {
    selectedTeam: undefined,
    loggedInUser: undefined,
  },
  mutations: {
    selectTeam(state, team) {
      state.selectedTeam = team;
    },
    setLoggedInUser(state, user) {
      state.loggedInUser = user;
    },
  },
  actions: {
    setLoggedInUser({ commit }, user) {
      commit("setLoggedInUser", user);
    },
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
    updateEvent({ state }, eventValues) {
      if (state.selectedTeam) {
        // Get cloud function
        const updateEvent = httpsCallable(functions, "updateEvent");

        // Add teamId to the event values
        let eventPayload = {
          teamId: state.selectedTeam?.id,
          ...eventValues,
        };

        return updateEvent(eventPayload);
      }
    },
    solveEgg({ state }, flag) {
      if (state.selectedTeam) {
        // Get cloud function
        const solveEggs = httpsCallable(functions, "solveEggs");

        // Add teamId to the event values
        let eggPayload = {
          teamId: state.selectedTeam?.id,
          flag: flag,
          solved: false,
        };

        return solveEggs(eggPayload);
      }
    },
  },
  getters: {
    selectedTeam(state) {
      return state.selectedTeam;
    },
    loggedInUser(state) {
      return state.loggedInUser;
    },
  },
  modules: {},
});
