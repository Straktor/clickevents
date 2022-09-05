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

      <v-hover v-slot="{ hover }">
        <v-btn
          icon
          :color="hover ? 'cYellow': 'white'"
          @click="routeEgg()"
        >
          <v-icon>mdi-egg-easter</v-icon>
        </v-btn>
      </v-hover>

      <v-hover v-slot="{ hover }">
        <v-btn
          icon
          :color="hover ? 'cYellow': 'white'"
          @click="routeExample()"
        >
          <v-icon>mdi-lightbulb-on</v-icon>
        </v-btn>
      </v-hover>

      <v-hover v-slot="{ hover }">
        <v-btn
          icon
          :color="hover ? 'cYellow': 'white'"
          @click="routeAbout()"
        >
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </v-hover>

      <AuthNav class="ml-3" />
    </v-app-bar>
    <v-main>
      <v-container :fluid="!$vuetify.breakpoint.xlOnly">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AuthNav from '@/components/AuthNav'

import { initFirebase } from '@/helpers/firebaseInit.js'

export default {
  components: {
    AuthNav
  },
  data: () => {
    return {

    }
  },
  created () {
    initFirebase()
  },
  methods: {
    routeHome () {
      if (this.$route?.name !== 'home') {
        this.$router.push({
          name: "home",
        })
      }
    },
    routeAbout () {
      if (this.$route?.name !== 'about') {
        this.$router.push({
          name: "about",
        })
      }
    },
    routeExample () {
      if (this.$route?.name !== 'exampleTeam') {
        this.$router.push({
          name: "exampleTeam",
        })
      }
    },
    routeEgg () {
      if (this.$route?.name !== 'egg') {
        this.$router.push({
          name: "egg",
        })
      }
    }
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
