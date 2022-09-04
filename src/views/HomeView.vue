<template>
  <v-row>
    <v-col>
      <RulesCard v-if="!selectedTeam"></RulesCard>
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
            v-for="(item, i) in events"
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

import { mockTeams } from '@/helpers/mockData.js'

import { Team } from '@/models/teamModel'
import RulesCard from '@/components/RulesCard.vue';

export default {
  name: "HomeView",
  components: { TeamCard, TimelineItem, RulesCard },
  data () {
    return {
      selectedTeam: undefined,
    };
  },
  computed: {
    teams () {
      return Team.query().withAllRecursive().all()
    },
    events () {
      return [...this.selectedTeam?.events, { type: "Add a new entry", values: {} }]
    },
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
    let teams = mockTeams

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
