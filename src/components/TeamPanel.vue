<template>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TeamCard from '@/components/TeamCard'

import { Team } from '@/models/teamModel'

export default {
  components: { TeamCard },
  props: {
    type: {
      type: String,
      default: 'planning'
    },
  },
  data: () => {
    return {
    }
  },
  computed: {
    ...mapGetters(['selectedTeam']),
    teams () {
      return Team.query().withAllRecursive().all()
    },
  },
  methods: {
    ...mapActions(['setSelectTeam']),
    selectTeam (team) {
      if (!team || this.selectedTeam?.name === team.name) {
        this.setSelectTeam(undefined)
        if (this.type === 'planning') {
          if (this.$route?.name !== 'home') {
            this.$router.push({ name: "home" })
          }
        } else if (this.type === 'eggteams') {
          if (this.$route?.name !== 'egg') {
            this.$router.push({ name: "egg" })
          }
        }
        return
      }

      this.setSelectTeam(team)

      if (this.$route.params?.name !== this.selectedTeam.name) {
        this.$router.push({
          name: this.type,
          params: {
            name: this.selectedTeam.name
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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