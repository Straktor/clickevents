<template>
  <div>
    <v-card
      :color="color"
      rounded="lg"
    >
      <v-card-title>Welcome to the event</v-card-title>
      <v-card-text
        class="aboutTheEvent lighten-5"
        :class="color"
      >
        <h2>What is the event about?</h2>
        <p>
          The event is called The Estimation is Right so over the next two days
          we want to put your planning and estimation skills to the test!
        </p>
        <p>
          You have been broken into teams different from your normal
          squads, and you'll need to work together to plan and execute a mini
          sprint in two days.
        </p>
        <div class="selectTeamSection">
          <div>To get started please select a team</div>
          <v-icon right> mdi-arrow-right-bold </v-icon>
        </div>
      </v-card-text>
    </v-card>

    <v-card
      :color="color"
      rounded="lg"
    >
      <v-card-title>Schedule</v-card-title>
      <v-card-text
        class="schedule lighten-5"
        :class="color"
      >
        <h2>How will the event work?</h2>

        <div
          v-for="(s, i) in schedule"
          :key="i"
        >
          <h3> {{ s.name }}</h3>
          <v-timeline dense>
            <v-timeline-item
              v-for="(item, j) in s.items"
              :key="j"
              :icon="item.icon"
              :color="item.color"
              fill-dot
            >
              <div class="timelineText">
                <span class="time">{{ item.time }}</span>{{ item.label }}<br />
              </div>
            </v-timeline-item>
          </v-timeline>

        </div>
      </v-card-text>
    </v-card>

    <v-card
      :color="color"
      rounded="lg"
    >
      <v-card-title>Rules of the game</v-card-title>
      <v-card-text
        class="schedule lighten-5"
        :class="color"
      >
        <v-expansion-panels
          rounded="lg"
          class="pt-4"
        >
          <v-expansion-panel
            v-for="(r,i) in rules"
            :key="i"
          >
            <v-expansion-panel-header :color="`${ruleColors[i % ruleColors.length]} lighten-3`">
              <div>
                <v-icon class="pr-1">{{ r.icon }}</v-icon>
                - {{ r.title }}
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="pt-3"
              :color="`${ruleColors[i % ruleColors.length]} lighten-5`"
            >
              <p
                v-for="section in r.content"
                :key="section"
              >
                {{ section }}
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      color: 'cOrange',
      schedule: [
        {
          name: 'Day 1',
          items: [
            { time: '9:00', label: 'Kick off call to reveal teams', icon: 'mdi-air-horn', color: 'cRed', },
            { time: '9:15', label: 'Teams start their planning', icon: 'mdi-account-hard-hat', color: 'cGreen', },
            { time: '12:00', label: 'Deadline to sumbit points estimation', icon: 'mdi-account-hard-hat', color: 'cGreen', },
            { time: '13:00', label: 'Teams start working on their planned work', icon: 'mdi-code-greater-than', color: 'cRed', },

          ]
        },
        {
          name: 'Day 2',
          items: [
            { time: '9:00', label: 'Team check in', icon: 'mdi-check-bold', color: 'cPink', },
            { time: '9:30', label: 'Teams submit status report', icon: 'mdi-chart-areaspline', color: 'cOrange', },
            { time: '12:00', label: 'Teams submit status report', icon: 'mdi-chart-areaspline', color: 'cOrange', },
            { time: '14:30', label: 'Cut off point to send code reviews to team', icon: 'mdi-file-chart-check', color: 'cPink', },
            { time: '15:00', label: 'Teams finish coding and go into review', icon: 'mdi-code-less-than', color: 'cRed', },
            { time: '16:00', label: 'Teams move into retros', icon: 'mdi-heart-multiple', color: 'cOrange', },
            { time: '16:30', label: 'We announce winners!', icon: 'mdi-medal', color: 'cRed', },
          ]
        }
      ],
      rules: [
        {
          title: 'How does the day work?',
          icon: 'mdi-briefcase',
          content: [
            "section 1",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          ],
        },
        { title: 'But what if we reach our goal early?', icon: 'mdi-flag-checkered', content: [], },
        { title: 'What are the points categories?', icon: 'mdi-currency-usd', content: [], },
        { title: 'Merge requests?', icon: 'mdi-file-find', content: [], },
        { title: 'How do we add events on the timeline?', icon: 'mdi-plus-thick', content: [], },
        { title: 'What do the winners get?', icon: 'mdi-medal', content: [], },
        { title: 'How long do we have to work each day?', icon: 'mdi-timer-sand', content: [], },
        { title: 'Easter eggs?', icon: 'mdi-egg-easter', content: [], },
        { title: 'If you have something that impacts production - alert other teams', icon: 'mdi-alert', content: [], },
      ],
      ruleColors: [
        'cRed',
        'cYellow',
        'cPink',
        'cGreen',
        'cBlue',
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  margin-top: 1.5em;
  text-align: justify;

  .v-card__title {
    color: white;
    text-align: center;
    font-family: pricedown;
    font-size: 45px;
    display: flex;
    justify-content: center;
  }

  .v-card__text {
    font-size: 16px;

    h2,
    h3 {
      text-align: center;
      padding-bottom: 0.5em;
      padding-top: 0.5em;
    }

    h2 {
      padding-bottom: 1em;
      text-decoration: underline;
    }

    .v-timeline-item {
      padding-bottom: 0.7em;
    }

    .timelineText {
      padding-top: 0.5em;

      span.time {
        display: inline-block;
        width: 5ch;
        font-weight: bold;
      }
    }

    .selectTeamSection {
      display: flex;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
    }
  }
}

// .aboutContainer {
//   text-align: center;
//   background-color: var(--v-cOrange-base);

//   h1.mainTitle {
//     font-size: 50px;
//     color: var(--v-cYellow-base);
//     text-align: center;
//     font-family: pricedown;
//   }

//   .aboutContent {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     align-content: center;

//     div.mainText {
//       font-size: 20px;
//       color: white;
//       font-weight: bold;
//     }
//   }

//   div.day {
//     font-size: 30px;
//     color: var(--v-cPink-base);
//     font-weight: bold;
//     text-decoration: underline;
//   }
//   .scheduleContent {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     align-content: center;

//     div.mainText {
//       font-size: 20px;
//       color: white;
//       font-weight: bold;
//     }
//     span.time {
//       font-size: 20px;
//       color: var(--v-cPink-base);
//       font-weight: bold;
//     }
//   }
// }
// .rulesBanner {
//   text-align: center;
//   background-color: var(--v-cYellow-base);

//   h1.mainTitle {
//     font-size: 50px;
//     color: var(--v-cOrange-base);
//     text-align: center;
//     font-family: pricedown;
//   }
// }
</style>