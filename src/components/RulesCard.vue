<template>
  <div>
    <v-sheet rounded="lg" class="aboutContainer pb-4">
      <h1 class="mainTitle ma-0 pa-0">Welcome to the event</h1>
      <div class="aboutContent">
        <div class="mainText">Please select a team</div>
        <v-icon dark right> mdi-arrow-right-bold </v-icon>
      </div>
    </v-sheet>
    <v-sheet rounded="lg" class="aboutContainer pb-4">
      <h1 class="mainTitle ma-0 pa-0">Welcome to the event</h1>
      <div class="aboutContent">
        <div class="mainText">Please select a team</div>
        <v-icon dark right> mdi-arrow-right-bold </v-icon>
      </div>
    </v-sheet>
  </div>
</template>
<style lang="scss" scoped>
.aboutContainer {
  text-align: center;
  background-color: var(--v-cOrange-base);

  h1.mainTitle {
    font-size: 50px;
    color: var(--v-cYellow-base);
    text-align: center;
    font-family: pricedown;
  }

  .aboutContent {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    div.mainText {
      font-size: 20px;
      color: white;
      font-weight: bold;
    }
  }
}
</style>