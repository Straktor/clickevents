<template>
  <v-timeline-item
    :color="card.color"
    :icon="card.icon"
    fill-dot
  >
    <BaseCard
      :color="card.color"
      :title="card.label"
      :readOnly.sync="readOnly"
    >
      <v-row>
        <v-col
          v-for="(f, i) in card.fields"
          :key="i"
          :cols="getColSize(f?.size)"
        >
          <p>{{ f.label }}</p>
          <component
            :is="f.type"
            :placeholder="f.placeholder"
            outlined
            dense
            hide-details
            rows="2"
            :disabled="readOnly"
          />
        </v-col>
      </v-row>
    </BaseCard>
  </v-timeline-item>
</template>

<script>
import {
  defaultCard,
  retroCard,
  codeReviewCard,
  stretchGoalCard,
  checkInCard,
  progessCard,
  estimationCard,
  taskCard,
} from "./timelineCards.js";

import BaseCard from '@/components/BaseCard'

export default {
  name: 'TimelineItem',
  components: {
    BaseCard,

  },
  props: {
    item: {
      type: String,
      default: () => ''
    }
  },
  data: () => {
    return {
      readOnly: true,
    }
  },
  computed: {
    card () {
      if (this.item === 'Estimation') return estimationCard
      else if (this.item === 'Task completed') return taskCard
      else if (this.item === 'Progress Report') return progessCard
      else if (this.item === 'Team Check-in') return checkInCard
      else if (this.item === 'New Stretch Goal') return stretchGoalCard
      else if (this.item === 'Code Review Completed') return codeReviewCard
      else if (this.item === 'Retrospective Meeting') return retroCard

      return defaultCard
    },
  },
  methods: {
    getColSize (size) {
      if (size === "lg") return 12
      else if (size === "m") return 6
      else if (size === "s") return 4

      return 6
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

.row {
  padding-bottom: 1em;

  .col {
    padding-top: 1em;
    padding-bottom: 0;

    p {
      margin: 0;
    }
  }
}
</style>
