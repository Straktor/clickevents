<template>
  <v-row>
    <v-col>
      <v-sheet
        rounded="lg"
        class="timelineContainer"
      >
        <h1 class="mainTitle ma-0 pa-0 ml-8">Planning of The Dream Team</h1>
        <div class="ma-0 pa-3 ml-8 my-6 warningCard">
          <h3>
            * This is an example page to show what each team's timeline should look
            like
          </h3>
        </div>
        <v-timeline
          dense
          class="pt-0"
        >
          <TimelineItem
            v-for="(item, i) in items"
            :key="i"
            :item="item"
            :editEnabled="false"
          />
        </v-timeline>
      </v-sheet>
    </v-col>
    <v-col cols="4">
      <v-sheet
        rounded="lg"
        class="rightPanel pa-2"
      >
        <h2 class="rightPanel-title">Teams</h2>
        <TeamCard
          v-for="(t, i) in fakeTeams"
          :key="i"
          :team="t"
          :teamStats="teamStats"
          :variant="i + 1"
          class="rightPanel--card ma-3 mt-0 selectedTeam"
        />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import TeamCard from "@/components/TeamCard";
import TimelineItem from "@/components/TimelineItem";

export default {
  name: "ExampleTeamView",
  components: { TeamCard, TimelineItem },
  data () {
    return {
      teamStats: {
        points: 55,
        numItemsCompleted: 8,
        CRCompleted: 5,
        pointsCompleted: 60,
        percentageCompleted: 110,
        numEggs: 5,
      },
      fakeTeams: undefined,
      items: [
        {
          type: "Estimation",
          createdAt: 1662393562000,
          values: {
            "# of points": "27",
            "Confidence level": 4,
            "List of tasks":
              "AUTO-111, AUTO-112, AUTO-113, AUTO-114, AUTO-115, AUTO-116, AUTO-117",
            Risks:
              "Liam is on call, Noah has an appointment so won't be availble for 2 hours on day 2.",
            Comments: "We anticipate taking on AUTO-119 as a strech goal",
          },
        },
        {
          type: "Task completed",
          createdAt: 1662399000000,
          values: {
            "# of points": "5",
            Task: "AUTO-112",
            "In production": true,
          },
        },
        {
          type: "Team Check-in",
          createdAt: 1662400800000,
          values: {
            "Format of check in": "Group huddle",
            Details:
              "We had a quick check in to see where we're at in development. At this point concerns were raised about the feasibility of AUTO-111 and we called in Veronique for clarification. After clarifying details, the devs are good to continue working",
          },
        },
        {
          type: "Appreciation Points",
          createdAt: 1662401700000,
          values: {
            "# of points": "10",
            From: "Babette",
            "Reason for points":
              "The team saw that an item wasn't feasible as it was written quickly and took steps to address it asap",
          },
        },
        {
          type: "Task completed",
          createdAt: 1662402640000,
          values: {
            "# of points": "15",
            Task: "AUTO-111",
            "In production": "checked",
          },
        },
        {
          type: "Code Review Completed",
          createdAt: 1662402910000,
          values: {
            Task: "AUTO-1190",
            "Team completed for": "Bob the Builder",
          },
        },
        {
          type: "Task completed",
          createdAt: 1662406030000,
          values: {
            "# of points": "15",
            Task: "AUTO-117",
            "In production": true,
          },
        },
        {
          type: "Progress Report",
          createdAt: 1662409846000,
          values: {
            "# of points Completed": "35",
            "# of items completed": "3",
            "Confidence level": 5,
            "Estimation Percentage completed": "70",
          },
        },
        {
          type: "Team Check-in",
          createdAt: 1662470100000,
          values: {
            "Format of check in": "Slack call",
            Details:
              "Team has completed 3 out of 7 items and 3 more are in testing. The team is swarming to get the testing and the last story done but is confident that they can take a stretch goal. We will have another check in at 11:30 to plan for this.",
          },
        },
        {
          type: "Task completed",
          createdAt: 1662470400000,
          values: {
            "# of points": "5",
            Task: "AUTO-116",
            "In production": true,
          },
        },
        {
          type: "Progress Report",
          createdAt: 1662471047000,
          values: {
            "# of points Completed": "40",
            "# of items completed": "4",
            "Confidence level": 5,
            "Estimation Percentage completed": "75",
          },
        },
        {
          type: "Task completed",
          createdAt: 1662471900000,
          values: {
            "# of points": "5",
            Task: "AUTO-113",
            "In production": true,
          },
        },
        {
          type: "Task completed",
          createdAt: 1662472380000,
          values: {
            "# of points": "5",
            Task: "AUTO-114",
            "In production": true,
          },
        },
        {
          type: "Code Review Completed",
          createdAt: 1662474600000,
          values: {
            Task: "AUTO-1191",
            "Team completed for": "Bob the Builder",
          },
        },
        {
          type: "Task completed",
          createdAt: 1662475980000,
          values: {
            "# of points": "5",
            Task: "AUTO-115",
            "In production": true,
          },
        },
        {
          type: "New Stretch Goal",
          values: {
            "Task added": "AUTO-118",
            "# of points": "5",
            "Confidence level": 4,
          },
        },
        {
          type: "Progress Report",
          createdAt: 1662479700000,
          values: {
            "# of points Completed": "55",
            "# of items completed": "7",
            "Confidence level": 5,
            "Estimation Percentage completed": "100",
          },
        },
        {
          type: "Code Review Completed",
          createdAt: 1662486900000,
          values: {
            Task: "AUTO-1199",
            "Team completed for": "Bob the Builder",
          },
        },
        {
          type: "Team Check-in",
          createdAt: 1662489000000,
          values: {
            "Format of check in": "Slack call",
            Details:
              "Team has completed all planned items and is swarming to finish stretch goal.",
          },
        },

        {
          type: "Retrospective Meeting",
          createdAt: 1662496217000,
          values: {
            "Would more/less planning time be better?":
              "The team felt like they planned well but could have spent a bit more time going into the details of the stories, it would have helped pick up on the lack of clarity in one story. ",
            "What could the team have done to increase velocity?": "Swarming on issues earlier would have helped.",
            "What would you change if you did it again?": "We would have taken an extra story in planning instead of taking half points for the one we finished",
            "How did you handle WIPs? (Limit the number of them, each person has a WIP task, etc.)?": "Initially we had many open at once but after our second check in, we decided to swarm instead of working individually",
            "What are the other key takeaways?": "We thought the impact of doing code reviews was bigger than we planned, 9bx6HWen (Thanks for exploring!)"
          },
        },
      ],
    };
  },
  watch: {
    $route: {
      handler (nv) {
        if (!nv?.params?.name) {
          this.selectedTeam = undefined;
        }
      },
    },
  },
  mounted () {
    this.fakeTeams = [
      {
        id: 1,
        name: "Dream Team",
        members: [
          {
            id: 1,
            name: "Liam",
          },
          {
            id: 2,
            name: "Olivia",
          },
          {
            id: 3,
            name: "Noah",
          },
          {
            id: 4,
            name: "Emma",
          },
          {
            id: 5,
            name: "Oliver",
          },
          {
            id: 6,
            name: "Charlotte",
          },
        ],
      },
    ];
  },
  methods: {
    getTeamFromName (teamName) {
      return this.fakeTeams.find((t) => t.name === teamName);
    },
  },
};
</script>

<style lang="scss" scoped>
.timelineContainer {
  background-color: transparent;
  text-align: left;

  h1.mainTitle {
    font-size: 50px;
    color: var(--v-cYellow-base);
    text-align: center;
    font-family: pricedown;
  }
}

.warningCard {
  border-left: 1em solid var(--v-cOrange-base);
  border-right: 1em solid var(--v-cOrange-base);
  border-radius: 0.5em;

  background-color: var(--v-cOrange-lighten5);

  h3 {
    font-size: 18px;
    text-align: center;
  }
}

.v-timeline::before {
  height: calc(100% - 90px);
  top: 42px;
  width: 4px;
  background-color: var(--v-cYellow-base);
}

.v-timeline::after {
  content: "";
  position: absolute;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid var(--v-cYellow-base);
  transform: rotate(270deg);
  top: calc(100% - 54px);
  left: calc(48px - 5px);
}

.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse)::before {
  left: calc(48px - 2px);
}

.v-card__title {
  font-size: 25px;
  font-family: pricedown;
}

.rightPanel {
  position: relative;
  margin: 15px;
  margin-top: 20px;

  outline-offset: 5px;
  background-color: var(--v-cGreen-base);
  font-family: pricedown;

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    bottom: -20px;
    right: -20px;
    border: 15px var(--v-cYellow-base) dotted;
  }

  .rightPanel-title {
    color: var(--v-cYellow-base);
    font-size: 50px;
    text-decoration: underline;
  }

  .rightPanel--card {
    cursor: pointer;
    z-index: 2;
  }

  .selectedTeam {
    outline: 5px solid var(--v-cYellow-base);
  }
}
</style>
