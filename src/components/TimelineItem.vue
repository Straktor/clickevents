<template>
  <v-timeline-item
    :color="itemType.color"
    :icon="itemType.icon"
    fill-dot
  >
    <EstimationCard
      v-if="itemType.label === 'Estimation'"
      :item="itemType"
    />

    <TaskCard
      v-if="itemType.label === 'Task completed'"
      :item="itemType"
    />

    <ProgressReportCard
      v-if="itemType.label === 'Progress Report'"
      :item="itemType"
    />

    <CheckInCard
      v-if="itemType.label === 'Team Check-in'"
      :item="itemType"
    />

    <NewStretchGoalCard
      v-if="itemType.label === 'New Stretch Goal'"
      :item="itemType"
    />

     <CodeReviewCard
      v-if="itemType.label === 'Code Review Completed'"
      :item="itemType"
    />

      <RetroCard
      v-if="itemType.label === 'Retrospective Meeting'"
      :item="itemType"
    />
  </v-timeline-item>
</template>

<script>
import EstimationCard from '@/components/EstimationCard'
import TaskCard from '@/components/TaskCard'
import ProgressReportCard from '@/components/ProgressReportCard'
import CheckInCard from '@/components/CheckInCard'
import NewStretchGoalCard from '@/components/NewStretchGoalCard.vue'
import CodeReviewCard from '@/components/CodeReviewCard.vue'
import RetroCard from '@/components/RetroCard.vue'

export default {
  name: 'TimelineItem',
  components: {

    ProgressReportCard,
    EstimationCard,
    TaskCard,
    CheckInCard,
    NewStretchGoalCard,
    CodeReviewCard,
    RetroCard
},
  props: {
    item: {
      type: String,
      default: () => ''
    },
  },
  data: () => {
    return {
      message: '',
      itemTypes: {
        estimation: {
          label: "Estimation",
          color: "cGreen",
          icon: "mdi-account-hard-hat",
        },
        "task completed": {
          label: "Task completed",
          color: "cPink",
          icon: "mdi-check-bold",
        },
        "progress report": {
          label: "Progress Report",
          color: "cOrange",
          icon: "mdi-chart-areaspline",
        },
        "team check-in": {
          label: "Team Check-in",
          color: "cRed",
          icon: "mdi-human-queue",
        },
        "new stretch goal": {
          label: "New Stretch Goal",
          color: "cGreen",
          icon: "mdi-rocket-launch",
        },
        "code review completed": {
          label: "Code Review Completed",
          color: "cPink",
          icon: "mdi-file-chart-check",
        },
        "retrospective meeting": {
          label: "Retrospective Meeting",
          color: "cOrange",
          icon: "mdi-heart-multiple",
        }
      }
    }
  },
  computed: {
    itemType () {
      if (!this.item || !(this.item.toLowerCase() in this.itemTypes))
        // Default item type
        return {
          name: 'Item Type Not Found',
          color: 'black',
          icon: 'mdi-plus',
          content: []
        }

      return this.itemTypes[this.item.toLowerCase()]
    }
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
.v-card__title {
  font-size: 25px;
  font-family: pricedown;
}

.v-timeline-item__body > .v-card:not(.v-card--flat)::after,
.v-timeline-item__body > .v-card:not(.v-card--flat):not(.v-card--link)::before {
  top: 25px;
}

::v-deep .v-timeline-item__dot {
  position: absolute;
  top: 16px;
}
</style>
