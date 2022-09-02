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
      @cancel="updateValues()"
      @submit="saveChanges()"
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
            v-model="localValues[f.label]"
            :placeholder="f.placeholder"
            outlined
            dense
            hide-details
            rows="2"
            :disabled="readOnly"
            class="white"
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
  appreciationCard,
} from "./timelineCards.js";

import BaseCard from '@/components/BaseCard'

export default {
  name: 'TimelineItem',
  components: {
    BaseCard,

  },
  props: {
    item: {
      type: Object,
      default: () => { }
    }
  },
  data: () => {
    return {
      readOnly: true,
      localValues: {},
    }
  },
  watch: {
    item: {
      handler () {
        if (this.readOnly) this.updateValues()
      },
      deep: true,
      immediate: true,
    }
  },
  computed: {
    card () {
      switch (this.item?.type) {
        case 'Estimation': return estimationCard
        case 'Task completed': return taskCard
        case 'Progress Report': return progessCard
        case 'Team Check-in': return checkInCard
        case 'New Stretch Goal': return stretchGoalCard
        case 'Code Review Completed': return codeReviewCard
        case 'Retrospective Meeting': return retroCard
        case 'Appreciation Points': return appreciationCard
      }
      return defaultCard
    },
  },
  methods: {
    updateValues () {
      this.localValues = JSON.parse(JSON.stringify(this.item.values))
    },
    saveChanges () {
      // TODO: update values
    },
    getColSize (size) {

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm':
          break;
        case 'md':
          if (size === "s") return 6
          else break;
        case 'lg':
        case 'xl':
          if (size === "s") return 4
          else if (size === "m") return 6
      }

      return 12
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
