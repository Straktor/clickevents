<template>
  <v-row>
    <v-col>
      <v-sheet
        v-if="!selectedTeam"
        rounded="lg"
        class="aboutContainer pb-4"
      >
        <h1 class="mainTitle ma-0 pa-0">Welcome to the event</h1>
        <div class="aboutContent">
          <div class="mainText">Please select a team </div>
          <v-icon
            dark
            right
          >
            mdi-arrow-right-bold
          </v-icon>
        </div>
      </v-sheet>
      <v-sheet
        v-if="selectedTeam"
        rounded="lg"
        class="timelineContainer"
      >
        <h1 class="mainTitle ma-0 pa-0 ml-8">Planning of {{ $route.params?.name}}</h1>
        <v-timeline
          dense
          class="pt-0"
        >
          <TimelineItem
            v-for="(item, i) in items"
            :key="i"
            :item="item"
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
          v-for="(t, i) in teams"
          :key="i"
          :team="t"
          :variant="i + 1"
          class="rightPanel--card ma-3 mt-0"
          :class="selectedTeam?.name === t.name ? 'selectedTeam' : ''"
          @click.native="selectTeam(t)"
        />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import TeamCard from '@/components/TeamCard'
import TimelineItem from '@/components/TimelineItem'

import { Team } from '@/models/teamModel'

export default {
  name: "HomeView",
  components: { TeamCard, TimelineItem },
  data () {
    return {
      selectedTeam: undefined,
      items: [
        { type: "Estimation", values: { '# of points': 'This works!' } },
        { type: "Task completed", values: {} },
        { type: "Progress Report", values: {} },
        { type: "Team Check-in", values: {} },
        { type: "New Stretch Goal", values: {} },
        { type: "Code Review Completed", values: {} },
        { type: "Retrospective Meeting", values: {} },
      ],
    };
  },
  computed: {
    teams () {
      return Team.query().withAllRecursive().all()
    }
  },
  watch: {
    '$route': {
      handler (nv) {
        if (!(nv?.params?.name)) {
          this.selectedTeam = undefined
        }
      },
    }
  },
  mounted () {
    let teams = [
      {
        id: 1,
        name: 'Team 1',
        points: 27,
        numItems: 5,
        numItemsCompleted: 3,
        CRCompleted: 2,
        pointsCompleted: 11,
        percentageCompleted: 33,
        members: [
          {
            id: 1,
            name: 'Liam'
          },
          {
            id: 2,
            name: 'Olivia'
          },
          {
            id: 3,
            name: 'Noah'
          },
          {
            id: 4,
            name: 'Emma'
          },
          {
            id: 5,
            name: 'Oliver'
          },
          {
            id: 6,
            name: 'Charlotte'
          },
        ]
      },
      {
        id: 2,
        name: 'Team 2',
        points: 85,
        numItems: 10,
        numItemsCompleted: 4,
        CRCompleted: 1,
        pointsCompleted: 21,
        percentageCompleted: 42,
        members: [
          {
            id: 7,
            name: 'Elijah'
          },
          {
            id: 8,
            name: 'Amelia'
          },
          {
            id: 9,
            name: 'James'
          },
          {
            id: 10,
            name: 'William'
          },
          {
            id: 11,
            name: 'Sophia'
          },
          {
            id: 12,
            name: 'Ava'
          },
        ],
      },
      {
        id: 3,
        name: 'Team 3',
        points: 13,
        numItems: 6,
        numItemsCompleted: 4,
        CRCompleted: 5,
        pointsCompleted: 22,
        percentageCompleted: 80,
        members: [
          {
            id: 13,
            name: 'Benjamin'
          },
          {
            id: 14,
            name: 'Isabella'
          },
          {
            id: 15,
            name: 'Lucas'
          },
          {
            id: 16,
            name: 'Mia'
          },
          {
            id: 17,
            name: 'Henry'
          },
        ],
      },
      {
        id: 4,
        name: 'Team 4',
        points: 10,
        numItems: 7,
        numItemsCompleted: 3,
        CRCompleted: 1,
        pointsCompleted: 4,
        percentageCompleted: 55,
        members: [
          {
            id: 17,
            name: 'Evelyn'
          },
          {
            id: 18,
            name: 'Theodore'
          },
          {
            id: 19,
            name: 'Harper'
          },
        ],
      }
    ]

    Team.insert({ data: teams })

    // Set selected Team
    this.selectTeam(this.getTeamFromName(this.$route.params?.name))
  },
  methods: {
    getTeamFromName (teamName) {
      return this.teams.find(t => t.name === teamName)
    },
    selectTeam (team) {
      if (!team || this.selectedTeam?.name === team.name) {
        if (this.$route?.name !== 'home') {
          this.$router.push({ name: "home" })
        }
        return
      }

      this.selectedTeam = team

      if (this.$route.params?.name !== this.selectedTeam.name) {
        this.$router.push({
          name: "planning",
          params: {
            name: this.selectedTeam.name
          }
        })
      }
    }
  }
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
