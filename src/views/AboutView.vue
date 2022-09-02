<template>
  <div class="about">
    <h1>How does the day work?</h1>
    <div class="row about">
      <div class="col-lg-7 col-12">
        <v-card rounded="lg" class="aboutContainer pb-4">
          <h1 class="mainTitle ma-0 pa-0">Stucture of the Day</h1>
          <v-row>
            <v-col cols="3">
              <v-img class="col-lg-5 col-12" src="@/assets/break.jpg" max-height="100"
                max-width="100"/>
            </v-col>
            <v-col cols="9">
              <div class="day__text" v-for="(t, i) in day_events" :key="i">{{ t }}</div>        
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>

    <div class="row about">
      <div class="col-lg-7 col-12 order-lg-4 order-3">
        <v-card rounded="lg" class="aboutContainer pb-4">
          <h1 class="mainTitle ma-0 pa-0">Taking Breaks</h1>
          <v-row>
            <v-col cols="9">
              <div class="about__text">
                It's important to take breaks through the day still so be sure
                to take two 15 minute breaks and a 1 hour lunch break at one
                point each day!
              </div>
            </v-col>
            <v-col cols="3">
              <v-img
                class="col-lg-5 col-12"
                src="@/assets/break.jpg"
                max-height="100"
                max-width="100"
              />
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>

    <h2 v-for="(t, i) in todos" :key="i">TODO: {{ t }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        "Dropdown component",
        "ProgessBar component",
        "New Entry in Timeline component",
        "Rules page",
        'Team page for an "example"',
        'Show only teams "events"',
        "Easter eggs page",
        "Add firestore",
        "Add live updates",
        "Firebase Auth",
        "Add cloud functions",
        "Slack integration", 
        "Work out points for winners"
      ],
      day_events: [
        "9:00am: Kick off call",
        "9:15am: Teams break out into planning",
        "12:00pm: Cut off point to submit team estimation"
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 50px;
  font-family: pricedown;
}

h1,
h2 {
  color: var(--v-cYellow-base);
}

h2 {
  margin-left: 5em;
  margin-right: 5em;
  font-size: 25px;
  text-align: left;
  background-color: darkgray;
}

.aboutContainer {
  text-align: center;
  background-color: var(--v-cOrange-base);
}
h1.mainTitle {
  font-size: 35px;
  color: var(--v-cGreen-base);
  text-align: center;
  font-family: pricedown;
}
</style>
