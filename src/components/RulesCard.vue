<template>
  <div>
    <v-sheet rounded="lg" class="aboutContainer pb-4">
      <h1 class="mainTitle ma-0 pa-0">Welcome to the event</h1>
      <div class="aboutContent">
        <div class="mainText">Please select a team</div>
        <v-icon dark right> mdi-arrow-right-bold </v-icon>
      </div>
    </v-sheet>
    <v-sheet rounded="lg" class="rulesBanner pb-0">
      <h1 class="mainTitle ma-3 pa-0">Rules of the Game</h1>
    </v-sheet>
    <v-sheet rounded="lg" class="aboutContainer pb-4">
      <h1 class="mainTitle ma-3 pa-0">What is the event about?</h1>
      <div class="aboutContent">
        <div class="mainText">
          The event is called The Estimation is Right so over the next two days
          we want to put your planning and estimation skills to the test!
          <br />You have been broken into teams different from your normal
          squads, and you'll need to work together to plan and execute a mini
          sprint in two days.
        </div>
      </div>
    </v-sheet>
    <v-sheet rounded="lg" class="aboutContainer pb-4">
      <h1 class="mainTitle ma-3 pa-0">How will the event work?</h1>
        <div class="day">Day 1</div>
      <div class="scheduleContent">
        <div class="mainText text-left">
          <span class="time">9:00 am:</span> Kick off call to reveal teams<br />
          <span class="time">9:15 am:</span> Teams start their
          planning<br />
          <span class="time">12:00 pm:</span> Deadline to sumbit points
          estimation<br />
          <span class="time">1:00 pm:</span> Teams start working on their planned work<br />
        </div>
      </div>
        <div class="day">Day 2</div>
      <div class="scheduleContent">
        <div class="mainText text-left">
          <span class="time">9:00 am:</span> Team check in <br />
          <span class="time">9:30 am:</span> Teams submit status report<br />
          <span class="time">12:00 pm:</span> Teams submit status report<br />
          <span class="time">2:30 pm:</span> Cut off point to send code reviews
          to team<br />
          <span class="time">3:00 pm:</span> Teams finish coding and go into
          review<br />
          <span class="time">4:00 pm:</span> Teams move into retros<br />
          <span class="time">4:30 pm:</span> We announce winners!<br />
        </div>
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

    div.day {
      font-size: 30px;
      color: var(--v-cPink-base);
      font-weight: bold;
      text-decoration: underline;
    }
  .scheduleContent {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    div.mainText {
      font-size: 20px;
      color: white;
      font-weight: bold;
    }
    span.time {
      font-size: 20px;
      color: var(--v-cPink-base);
      font-weight: bold;
    }
  }
}
.rulesBanner {
  text-align: center;
  background-color: var(--v-cYellow-base);

  h1.mainTitle {
    font-size: 50px;
    color: var(--v-cOrange-base);
    text-align: center;
    font-family: pricedown;
  }
}
</style>