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

      <v-spacer></v-spacer>

      <v-btn
        icon
        color="cYellow"
        @click="routeAbout()"
      >
        <v-icon>mdi-egg-easter</v-icon>
      </v-btn>
      <v-btn
        icon
        color="cYellow"
        @click="routeEgg()"
      >
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container :fluid="!$vuetify.breakpoint.xlOnly">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
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
