<template>
  <v-row>
    <v-col>
      <RulesCard v-if="!selectedTeam"></RulesCard>
      <v-sheet
        v-if="selectedTeam"
        rounded="lg"
        class="timelineContainer"
      >
        <!-- TODO: Move to its own component -->
        <div class="ma-0 pa-3 ml-8 my-6 warningCard">
          <h3>
            Select the types of card you want to view
          </h3>
          <v-row class="pa-3 selectCardTypeRow">
            <v-col
              v-for="(s, i) in showCards"
              :key="i"
              xl="3"
              lg="4"
              md="6"
              sm="12"
              class="py-0"
            >
              <v-switch
                v-model="s.show"
                :color="s.color"
                :label="s.label"
                hide-details
                inset
              />
            </v-col>
          </v-row>
        </div>
        <h1 class="mainTitle ma-0 pa-0 ml-8">Planning of {{ selectedTeam.name }}</h1>

        <v-timeline
          dense
          class="pt-0"
        >
          <TimelineItem
            v-for="(item, i) in getTeamEvents(selectedTeam.id)"
            :key="i"
            :item="item"
            :editEnabled="!!loggedInUser && isUserPartOfTeamOrAdmin()"
          />
        </v-timeline>
      </v-sheet>
    </v-col>
    <v-col cols="4">
      <TeamPanel type="planning" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

import TimelineItem from '@/components/TimelineItem'
import RulesCard from '@/components/RulesCard'
import TeamPanel from '@/components/TeamPanel'


import { Event, Member } from '@/models/teamModel'

export default {
  name: "HomeView",
  components: { TeamPanel, TimelineItem, RulesCard },
  data () {
    return {
      // TODO: Move to its own component
      showCards: [
        {
          label: 'Estimation',
          color: "cGreen",
          show: true
        },
        {
          label: 'Task completed',
          color: "cPink",
          show: true
        },
        {
          label: 'Progress Report',
          color: "cYellow darken-2",
          show: true
        },
        {
          label: 'Code Review Completed',
          color: "cPink",
          show: true
        },
        {
          label: 'New Stretch Goal',
          color: "cGreen",
          show: true
        },

        {
          label: 'Team Check-in',
          color: "cRed",
          show: true
        },
        {
          label: 'Appreciation Points',
          color: "cPink",
          show: true
        },
        {
          label: "Retrospective Meeting",
          color: "cOrange",
          show: true
        },
      ]
    };
  },
  computed: {
    ...mapGetters(['selectedTeam', 'loggedInUser']),
    events () {
      return Event.query().orderBy('createdAt').all()
    },
    members () {
      return Member.query().withAllRecursive().all()
    },
  },
  mounted () { },
  methods: {
    isUserPartOfTeamOrAdmin () {
      if (!this.loggedInUser) {
        return false
      }

      // Check if part of team
      for (const m of this.selectedTeam.members) {
        if (m?.email.toLowerCase() === this.loggedInUser.email.toLowerCase()) {
          return true
        }
      }

      // Check if admin
      let member = this.members.find(m => m?.email.toLowerCase() === this.loggedInUser.email.toLowerCase())
      return member?.role === 'admin'
    },
    getTeamEvents (teamId) {
      let teamEvents = this.events.filter(e => e.teamId === teamId)


      let cardsToShow = this.showCards.filter(c => c.show)
      teamEvents = teamEvents.filter(e => cardsToShow.map(c => c.label).includes(e.type))

      let events = []
      if (this.isUserPartOfTeamOrAdmin()) {
        events.push({ type: "Add a new entry", values: {} })
      }

      if (teamEvents) {
        events = [...teamEvents, ...events]
      }

      return events
    },
  }
};
</script>

<style lang="scss" scoped>
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

.selectCardTypeRow {
  align-items: center;
}
</style>
