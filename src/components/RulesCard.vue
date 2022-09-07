<template>
  <div>
    <v-card :color="color" rounded="lg">
      <v-card-title>
        Welcome to the event
        <v-icon large color="white" class="pl-3"> mdi-party-popper </v-icon>
      </v-card-title>
      <v-card-text class="aboutTheEvent lighten-5" :class="color">
        <h2>What is the event about?</h2>
        <p>
          The event is called The Estimation is Right so over the next two days
          we want to put your planning and estimation skills to the test!
        </p>
        <p>
          You have been divided into teams different from your normal squads,
          and you'll need to work together to plan and execute a mini sprint in
          two days.
        </p>
        <p>
          The catch is, if you don't deliver all the points you've committed to
          or more, your PO points total will be 0. This is an estimation
          challenge so if you can't deliver what you've committed to it means
          you haven't delivered to the user.
        </p>
        <div class="selectTeamSection">
          <div>To get started please select a team</div>
          <v-icon right> mdi-arrow-right-bold </v-icon>
        </div>
      </v-card-text>
    </v-card>

    <v-card :color="color" rounded="lg">
      <v-card-title>
        <v-icon large color="white" class="pr-3">
          mdi-calendar-clock-outline
        </v-icon>
        Schedule
      </v-card-title>
      <v-card-text class="schedule lighten-5" :class="color">
        <h2>How will the event work?</h2>

        <div v-for="(s, i) in schedule" :key="i">
          <h3>{{ s.name }}</h3>
          <v-timeline dense>
            <v-timeline-item
              v-for="(item, j) in s.items"
              :key="j"
              :icon="item.icon"
              :color="item.color"
              fill-dot
            >
              <div class="timelineText">
                <span class="time">{{ item.time }}</span
                >{{ item.label }}
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </v-card-text>
    </v-card>

    <v-card :color="color" rounded="lg">
      <v-card-title>
        Rules of the game
        <v-icon large color="white" class="pl-3"> mdi-gavel </v-icon>
      </v-card-title>
      <v-card-text class="schedule lighten-5" :class="color">
        <v-expansion-panels rounded="lg" class="pt-4">
          <v-expansion-panel v-for="(r, i) in rules" :key="i">
            <v-expansion-panel-header
              :color="`${ruleColors[i % ruleColors.length]} lighten-3`"
            >
              <div>
                <v-icon class="pr-1">{{ r.icon }}</v-icon>
                <span>- {{ r.title }}</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="pt-3"
              :color="`${ruleColors[i % ruleColors.length]} lighten-5`"
            >
              <p v-for="section in r.content" :key="section">
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
      color: "cOrange",
      schedule: [
        {
          name: "Day 1",
          items: [
            {
              time: "9:00",
              label: "Kick off call to reveal teams",
              icon: "mdi-air-horn",
              color: "cRed",
            },
            {
              time: "9:15",
              label: "Teams start their planning",
              icon: "mdi-account-hard-hat",
              color: "cGreen",
            },
            {
              time: "12:00",
              label: "Deadline to sumbit points estimation",
              icon: "mdi-account-hard-hat",
              color: "cGreen",
            },
            {
              time: "13:00",
              label: "Teams start working on their planned work",
              icon: "mdi-code-greater-than",
              color: "cRed",
            },
          ],
        },
        {
          name: "Day 2",
          items: [
            {
              time: "9:00",
              label: "Team check in",
              icon: "mdi-check-bold",
              color: "cPink",
            },
            {
              time: "9:30",
              label: "Teams submit status report",
              icon: "mdi-chart-areaspline",
              color: "cOrange",
            },
            {
              time: "12:00",
              label: "Teams submit status report",
              icon: "mdi-chart-areaspline",
              color: "cOrange",
            },
            {
              time: "14:30",
              label: "Cut off point to send code reviews to team",
              icon: "mdi-file-chart-check",
              color: "cPink",
            },
            {
              time: "15:00",
              label: "Teams finish coding and go into review",
              icon: "mdi-code-less-than",
              color: "cRed",
            },
            {
              time: "16:00",
              label: "Teams move into retros",
              icon: "mdi-heart-multiple",
              color: "cOrange",
            },
            {
              time: "16:30",
              label: "We announce winners!",
              icon: "mdi-medal",
              color: "cRed",
            },
          ],
        },
      ],
      rules: [
        {
          title: "How does the day work?",
          icon: "mdi-briefcase",
          content: [
            "The goal of the next two days is to test your estimation skills. We have provided a backlog of unprioritized tasks, but like the last event, our Product Owners have assigned PO points to them. It's up to you how many of these stories you commit to finishing but by 12PM on day 1, you will need to submit your estimates. After they are submitted, you cannot alter them, however, you can add stretch goals which we explain below.",
            "While we want you to work on tech debt, the point of this is to accurately estimate the work you can finish. So make sure you take into account any team absences or factors that might influence your delivery.",
            "As we said above, if you don't reach your committed to goal, you get 0 points!",
          ],
        },
        {
          title: "But what if we reach our goal early?",
          icon: "mdi-flag-checkered",
          content: [
            "So if you reach your goal early, congratulations, that's amazing! We want you to be able to continue competing though so you are allowed to add strech goals as a team. However, these stretch goals are only worth half the points of the original story. Seeing as finishing early is a sign you didn't plan accurately for your two days you do have to have a penalty of sorts while you continue!",
          ],
        },
        {
          title: "How do code reviews work this time around?",
          icon: "mdi-file-find",
          content: [
            "This time around, code reviews work in a similar way than in our day-to-day work. Once you have something ready to be reviewed, you can send to another team via the event slack channel. They will get a point for completing. Code reviews shouldn't be used a weapon to slow other teams down!",
          ],
        },
        {
          title: "What are the points categories?",
          icon: "mdi-currency-usd",
          content: [
            "You can score points in 4 different ways:",
            "1. # of points completed: these are the annoyance points given by our Product Owners based on how much they want each issue to be solved. When you submit your estimations, the PO points are what you'll be using.",
            "2. # of items completed: this one is self explanatory but each time you close an item you get another point here",
            "3. # of code reviews completed: other teams can send you code reviews, for each one you complete you get another point",
            "4. # of eggs: there are easter eggs hidden across the event, the more you find, the more points you get!",
          ],
        },
        {
          title: "What is the event timeline and how do we add to it?",
          icon: "mdi-plus-thick",
          content: [
            "The timeline is basically a report on how your team is working, built in real time. You can see an example that we've built for guidance, it is linked in the top of this section. Each team's scrum master should take the lead on keeping this up to date for you. There are 8 different event types that can be added:",
            "1. Estimation: this card should be filled out as soon as your team's planning is done",
            "2. Task Completed: this card should be filled out each time a task is completed",
            "3. Progress Report: this card should be filled in several times accross the event, we specify them in the schedule.",
            "4. Code Review Completed: this card should be filled every time you do a code review for another team",
            "5. New Stretch Goal: this card should be filled in every time you add a stretch goal",
            "6. Team Check-in: this card should be filled in for each check in your team does",
            "7. Appreciation Points: this card can be filled in when someone outside your team wants to send you points to recognize your great work!",
            "8. Retrospective Meeting: this card should be filled in through the team's retro",
            "You can add to your timeline by clicking on your team in the sidebar and pressing the + button at the bottom of the timeline. From there you can pick the kind of event you want to add to the timeline. ",
          ],
        },
        { title: "What do the winners get?", icon: "mdi-medal", content: ["The winners this time will receive Bell Achievers points to recognize all their hard work and great estimation skills!"] },
        {
          title: "How long do we have to work each day?",
          icon: "mdi-timer-sand",
          content: ["While this is a special event, it's still a working day so you don't need to work longer than you normally do. We also want you to take care of yourselves so make sure you take two 15 minutes breaks and a 1 hour lunch break each day!"],
        },
        { title: "I see an Easter egg page, what's that all about?", icon: "mdi-egg-easter", content: ["For this event, there are multiple easter eggs hidden across the event! They are random strings of numbers and letters that you can keep a look out for. If you think you've found one then you can go to the easter egg page and check to make sure you're right! If your team finds an easter egg then your easter egg count will go up. Each team can find all the easter eggs, they don't disappear after one team finds it. On the easter egg page you can also find some helpful hints about the eggs!"] },
        {
          title:
            "What if I want to push something to production?",
          icon: "mdi-alert",
          content: ["Obviously anything that gets put to production should be thoroughly tested. If the work doesn't affect production then you can push as often as you want. If it does affect production then we want to minimize impact for the users so be sure to let the other teams know and try to coordinate if they also have items to push. Xp3Rbv6H"],
        },
      ],
      ruleColors: ["cRed", "cYellow", "cPink", "cGreen", "cBlue"],
    };
  },
};
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
    padding-left: 2em;
    padding-right: 2em;

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

    .v-expansion-panel-header > div > i {
      line-height: 15px;
    }
  }
}
</style>
