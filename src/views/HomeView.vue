<template>
  <v-row>
    <v-col>
      <v-sheet
        rounded="lg"
        class="timelineContainer"
      >
        <v-timeline dense>
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
import { Team } from '@/models/teamsModel.js'

export default {
  name: "HomeView",
  components: { TeamCard, TimelineItem },
  data () {
    return {
      selectedTeam: undefined,
      teams: [
        new Team({
          name: 'Team 1',
          points: 27,
          members: ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Charlotte'],
          numItems: 5,
          numItemsCompleted: 3,
          CRCompleted: 2,
          pointsCompleted: 11,
          percentageCompleted: 33
        }),
        new Team({
          name: 'Team 2',
          points: 85,
          members: ['Elijah', 'Amelia', 'James', 'Ava', 'William', 'Sophia'],
          numItems: 10,
          numItemsCompleted: 4,
          CRCompleted: 1,
          pointsCompleted: 21,
          percentageCompleted: 42
        }),
        new Team({
          name: 'Team 3',
          points: 13,
          members: ['Benjamin', 'Isabella', 'Lucas', 'Mia', 'Henry'],
          numItems: 6,
          numItemsCompleted: 4,
          CRCompleted: 5,
          pointsCompleted: 22,
          percentageCompleted: 80
        }),
        new Team({
          name: 'Team 4',
          points: 10,
          members: ['Evelyn', 'Theodore', 'Harper'],
          numItems: 7,
          numItemsCompleted: 3,
          CRCompleted: 1,
          pointsCompleted: 4,
          percentageCompleted: 55
        })
      ],
      items: [
        "Estimation",
        "Task completed",
        "Progress Report",
        "Team Check-in",
        "New Stretch Goal",
        "Code Review Completed",
        "Retrospective Meeting",
      ],
    };
  },
  methods: {
    selectTeam (team) {
      if (this.selectedTeam?.name === team.name) {
        this.selectedTeam = undefined
        return
      }

      this.selectedTeam = team
    }
  }
};
</script>

<style lang="scss" scoped>
.timelineContainer {
  margin-top: 15px;
  background-color: transparent;
  text-align: left;
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
  margin-top: 30px;

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
