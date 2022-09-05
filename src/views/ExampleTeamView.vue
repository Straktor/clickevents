<template>
  <v-row>
    <v-col>
      <v-sheet rounded="lg" class="timelineContainer">
        <h1 class="mainTitle ma-0 pa-0 ml-8">Planning of the Dream Team</h1>
        <v-timeline dense class="pt-0">
          <TimelineItem v-for="(item, i) in items" :key="i" :item="item" />
        </v-timeline>
      </v-sheet>
    </v-col>
    <v-col cols="4">
      <v-sheet rounded="lg" class="rightPanel pa-2">
        <h2 class="rightPanel-title">Teams</h2>
        <TeamCard
          v-for="(t, i) in fakeTeams"
          :key="i"
          :team="t"
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
  data() {
    return {
      fakeTeams: undefined,
      items: [
        {
          type: "Estimation",
          createdAt:1662382878000,
          values: {
            "# of points": "27",
            "Confidence level": "5",
            "List of tasks":
              "AUTO-111, AUTO-112, AUTO-113, AUTO-114, AUTO-115, AUTO-116, AUTO-117",
            Risks:
              "Liam is on call, Noah has an appointment so won't be availble for 2 hours on day 2.",
            Comments: "We anticipate taking on AUTO-119 as a strech goal",
          },
        },
        {
          type: "Task completed",
          createdAt:1662382878000,
          values: {
            "# of points": "5",
            Task: "AUTO-112",
            "In production": true,
          },
        },
        {
          type: "Team Check-in",
          values: {
            "Format of check in": "Group huddle",
            Details:
              "We had a quick check in to see where we're at in development. At this point concerns were raised about the feasibility of AUTO-111 and we called in Veronique for clarification. After clarifying details, the devs are good to continue working",
          },
        },
        {
          type: "Appreciation Points",
          values: {
            "# of points": "10",
            From: "Babette",
            "Reason for points":
              "The team saw that an item wasn't feasible as it was written quickly and took steps to address it asap",
          },
        },
        {
          type: "Task completed",
          values: {
            "# of points": "15",
            Task: "AUTO-111",
            "In production": "checked",
          },
        },
        {
          type: "Code Review Completed",
          values: {
            Task: "AUTO-1190",
            "Team completed for": "Bob the Builder",
          },
        },
        {
          type: "Progress Report",
          values: {
            "# of points Completed": "20",
            "# of items completed": "2",
            "Confidence level": "4",
          },
        },
        { type: "New Stretch Goal", values: {} },

        { type: "Retrospective Meeting", values: {} },
      ],
    };
  },
  watch: {
    $route: {
      handler(nv) {
        if (!nv?.params?.name) {
          this.selectedTeam = undefined;
        }
      },
    },
  },
  mounted() {
    this.fakeTeams = [
      {
        id: 1,
        name: "The Dream Team",
        points: 55,
        numItems: 7,
        numItemsCompleted: 8,
        CRCompleted: 5,
        pointsCompleted: 60,
        percentageCompleted: 110,
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

    // Set selected Team
    this.selectTeam(this.getTeamFromName(this.$route.params?.name));
  },
  methods: {
    getTeamFromName(teamName) {
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

.testing12 {
  color: var(--v-cYellow-base);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  background-color: var(--v-cBlue-darken1);

  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
