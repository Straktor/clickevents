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
      ></v-img>

      <v-toolbar-title class="mainTitle">The <span>estimation</span> is right
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        icon
        color="#fff"
      >
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
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

@font-face {
  font-family: "pricedown";
  src: url("assets/fonts/pricedown/pricedown_bl-webfont.woff2") format("woff2"),
    url("assets/fonts/pricedown/pricedown_bl-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

.mainTitle {
  font-family: pricedown;
  font-size: 35px;

  span {
    color: var(--v-cYellow-base);
  }
}
</style>
