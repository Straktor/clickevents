<template>
  <v-timeline-item
    :color="itemType.color"
    :icon="itemType.icon"
    fill-dot
  >
    <BaseCard
      :color="itemType.color"
      :title="itemType.label"
      :readOnly.sync="readOnly"
    >
      <component
        :is="getCard(itemType.label)"
        :item="itemType"
      />
    </BaseCard>
  </v-timeline-item>
</template>

<script>
import BaseCard from '@/components/BaseCard'
import EstimationCard from '@/components/TimelineCards/EstimationCard'
import TaskCard from '@/components/TimelineCards/TaskCard'
import ProgressReportCard from '@/components/TimelineCards/ProgressReportCard'
import CheckInCard from '@/components/TimelineCards/CheckInCard'
import NewStretchGoalCard from '@/components/TimelineCards/NewStretchGoalCard.vue'
import CodeReviewCard from '@/components/TimelineCards/CodeReviewCard.vue'
import RetroCard from '@/components/TimelineCards/RetroCard.vue'

export default {
  name: 'TimelineItem',
  components: {
    BaseCard,
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
    }
  },
  data: () => {
    return {
      readOnly: false,
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
    getCard (item) {
      if (item === 'Estimation') return EstimationCard
      else if (item === 'Task completed') return TaskCard
      else if (item === 'Progress Report') return ProgressReportCard
      else if (item === 'Team Check-in') return CheckInCard
      else if (item === 'New Stretch Goal') return NewStretchGoalCard
      else if (item === 'Code Review Completed') return CodeReviewCard
      else if (item === 'Retrospective Meeting') return RetroCard

      throw `Unknown card ${item}`
    }
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
