<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, value }">
      <v-btn
        icon
        :color="value ? 'cYellow': 'white'"
        @click="goToRoute()"
        v-on="on"
      >
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    routeName: {
      type: String,
      default: 'Home'
    },
    icon: {
      type: String,
      default: 'mdi-plus'
    },
    tooltip: {
      type: String,
      default: ''
    },
  },
  data: () => {
    return {
    }
  },
  methods: {
    ...mapActions(['setSelectTeam']),
    goToRoute () {
      if (this.$route?.name !== this.routeName) {
        this.setSelectTeam(undefined)
        this.$router.push({
          name: this.routeName,
        })
      }
    },
  }
}
</script>