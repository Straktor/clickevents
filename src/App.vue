<template>
  <v-app id="app">
    <v-app-bar
      color="#ec200c"
      clipped-right
      app
    >
      <v-img
        class="mx-2"
        :src="require('./assets/price_right_dollar_sign.png')"
        max-height="50"
        max-width="35"
        contain
        @click.native="routeHome()"
      />

      <v-toolbar-title
        class="mainTitle__navBar"
        @click="routeHome()"
      >
        The <span>estimation</span> is right
      </v-toolbar-title>

      <v-spacer />

      <NavLink
        routeName="egg"
        icon="mdi-egg-easter"
        tooltip="Easter eggs"
      />

      <NavLink
        routeName="exampleTeam"
        icon="mdi-account-box-multiple"
        tooltip="Planning example"
      />

      <AuthNav class="ml-3" />

      <v-img
        :src="require('./assets/backgroudImg.png')"
        max-height="0"
        max-width="0"
        contain
      />
    </v-app-bar>
    <v-main>
      <v-container :fluid="!$vuetify.breakpoint.xlOnly">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavLink from '@/components/NavLink'
import AuthNav from '@/components/AuthNav'

import { initFirebase } from '@/helpers/firebaseInit.js'
import { Team, Member, Event, Egg } from '@/models/teamModel'
import { db } from '@/helpers/firebaseInit.js'

import { collection, onSnapshot, query } from "firebase/firestore";

import { mapActions } from 'vuex'

export default {
  components: {
    AuthNav,
    NavLink
  },
  data: () => {
    return {

      firstLoad: true,
      firestoreUnsub: [],
    }
  },
  computed: {
    teams () {
      return Team.query().withAllRecursive().all()
    },
  },
  created () {
    initFirebase()
  },
  mounted () {
    // Load data from Firebase and listen for changes
    // Teams
    let teamUnsub = onSnapshot(query(collection(db, "teams")), (docs) => {
      let teams = [];
      docs.forEach((doc) => {
        // Set firebase id as vuex orm id
        teams.push({ id: doc.id, ...doc.data() });
      });

      Team.insert({ data: teams })

      if (this.firstLoad) {
        // Set selected Team
        this.setSelectTeam(this.getTeamFromName(this.$route.params?.name))
        this.firstLoad = false
      }
    });

    // Users
    let userUnsub = onSnapshot(query(collection(db, "users")), (docs) => {
      let users = [];
      docs.forEach((doc) => {
        // Set firebase id as vuex orm id
        users.push({ id: doc.id, ...doc.data() });
      });
      Member.insert({ data: users })
    });

    // Events
    let eventsUnsub = onSnapshot(query(collection(db, "events")), (docs) => {
      let events = [];
      docs.forEach((doc) => {
        // Set firebase id as vuex orm id
        let modifiedEvent = { id: doc.id, ...doc.data() }
        modifiedEvent.createdAt = doc.data().createdAt.seconds * 1000
        events.push(modifiedEvent);
      });
      Event.insert({ data: events })
    });

    // Events
    let eggsUnsub = onSnapshot(query(collection(db, "eggs")), (docs) => {
      let eggs = [];
      docs.forEach((doc) => {
        // Set firebase id as vuex orm id
        let modifiedEgg = { id: doc.id, ...doc.data() }
        modifiedEgg.createdAt = doc.data().createdAt.seconds * 1000
        eggs.push(modifiedEgg);
      });
      Egg.insert({ data: eggs })
    });

    // Base64 YVJqU1doMW8yZWc2TGI=
    this.firestoreUnsub = [teamUnsub, userUnsub, eventsUnsub, eggsUnsub]
  },
  destroyed () {
    for (const unsub of this.firestoreUnsub) {
      unsub()
    }
  },
  methods: {
    ...mapActions(['setSelectTeam']),
    getTeamFromName (teamName) {
      return this.teams.find(t => t.name === teamName)
    },
    routeHome () {
      if (this.$route?.name !== 'home') {
        this.setSelectTeam(undefined)
        this.$router.push({
          name: "home",
        })
      }
    },
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "pricedown";
  src: url("assets/fonts/pricedown/pricedown_bl-webfont.woff2") format("woff2"),
    url("assets/fonts/pricedown/pricedown_bl-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "vtks animal 2";
  src: url("assets/fonts/vtksanimal2/vtksanimal2.woff2") format("woff2"),
    url("assets/fonts/vtksanimal2/vtksanimal2.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Bristol";
  src: url("assets/fonts/Bristol/Bristol.woff2") format("woff2"),
    url("assets/fonts/Bristol/Bristol.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "VTKS  mural";
  src: url("assets/fonts/VTKSmural/VTKSmural.woff2") format("woff2"),
    url("assets/fonts/VTKSmural/VTKSmural.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Stylish Marker";
  src: url("assets/fonts/StylishMarker/StylishMarker.woff2") format("woff2"),
    url("assets/fonts/StylishMarker/StylishMarker.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("assets/bluebg.png");
  background-repeat: repeat;
  min-height: 100vh;
  font-family: "Silkscreen", cursive;
}

.v-sheet.theme--light.v-toolbar.v-toolbar.v-app-bar {
  color: white;
}

.v-toolbar__content {
  .v-image {
    cursor: pointer;
  }

  .v-toolbar__title {
    &.mainTitle__navBar {
      font-family: pricedown;
      font-size: 35px;
      cursor: pointer;

      span {
        color: var(--v-cYellow-base);
      }
    }
  }
}
</style>
