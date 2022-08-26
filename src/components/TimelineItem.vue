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

    <BaseCard
      v-if="!['Estimation', 'Task completed', 'Progress Report'].includes(itemType.label)"
      :item="itemType"
    >
      <div
        v-for="(c, i) in itemType.content"
        :key="i"
      >
        -{{ c }}
      </div>
    </BaseCard>
  </v-timeline-item>
</template>

<script>
import EstimationCard from '@/components/EstimationCard'
import TaskCard from '@/components/TaskCard'
import ProgressReportCard from '@/components/ProgressReportCard'
import BaseCard from '@/components/BaseCard'

export default {
  name: 'TimelineItem',
  components: {
    BaseCard,
    ProgressReportCard,
    EstimationCard,
    TaskCard
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
          content: [
            "Number of points",
            "List of tasks",
            "Risks",
            "Confidence level",
            "Comments",
          ]
        },
        "task completed": {
          label: "Task completed",
          color: "cPink",
          icon: "mdi-check-bold",
          content: [
            "Task",
            "Number of points",
            "In production checkbox"
          ]
        },
        "progress report": {
          label: "Progress Report",
          color: "cOrange",
          icon: "mdi-chart-areaspline",
          content: [
            "Number of items completed",
            "Confidence check",
            "Percentage completed (Progress bar)",
          ],
        },
        "team check-in": {
          label: "Team Check-in",
          color: "cRed",
          icon: "mdi-human-queue",
          content: [
            "Format of check in",
            "Details (free form comments)"
          ],
        },
        "new stretch goal": {
          label: "New Stretch Goal",
          color: "cGreen",
          icon: "mdi-rocket-launch",
          content: [
            "Task (jira number)",
            "Number of points added",
            "Confidence check",
          ],
        },
        "code review completed": {
          label: "Code Review Completed",
          color: "cPink",
          icon: "mdi-file-chart-check",
          content: [
            "Task",
            "Team Code Review Completed For",
            "Link to CR in gitlab",
          ],
        },
        "retrospective meeting": {
          label: "Retrospective Meeting",
          color: "cOrange",
          icon: "mdi-heart-multiple",
          content: [
            "Would more/less planning time be better",
            "What could the team have done to increase velocity",
            "What would you change if you did it again?",
            "How did you handle WIPs? (Limit the number of them, each person has a WIP task, etc.)",
            "What are the other key takeaways",
          ],
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
