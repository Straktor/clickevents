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
      :hideDateTime="isNewEntryCard()"
      :hideReadOnly="isNewEntryCard()"
      @cancel="updateValues()"
      @submit="saveChanges()"
    >
      <!-- New entry section -->
      <v-row
        v-if="isNewEntryCard()"
        class="pb-1"
      >
        <NewEntry
          :cards="cards"
          :color="card.color"
        />
      </v-row>
      <!-- Fields section -->
      <v-row v-else>
        <BaseField
          v-for="(f, i) in card.fields"
          :key="i"
          v-model="localValues[f.label]"
          :field="f"
          :readOnly="readOnly"
        />
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
  newEntryCard,
} from "./timelineCards.js";

import BaseCard from '@/components/BaseCard'
import NewEntry from '@/components/NewEntry'
import BaseField from '@/components/BaseField'

export default {
  name: 'TimelineItem',
  components: {
    BaseCard,
    NewEntry,
    BaseField,
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
      selectedNewEntry: undefined,
      cards: [
        estimationCard,
        taskCard,
        progessCard,
        codeReviewCard,
        stretchGoalCard,
        checkInCard,
        appreciationCard,
        retroCard,
      ]
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
      for (let c of [...this.cards, newEntryCard]) {
        if (c.label === this.item.type) return c
      }

      return defaultCard
    },
  },
  methods: {
    updateValues () {
      if (this.item?.values) this.localValues = JSON.parse(JSON.stringify(this.item.values))
    },
    saveChanges () {
      // TODO: handle promise
    },
    isNewEntryCard () {
      return this.card === newEntryCard
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

:deep(.v-timeline-item__dot) {
  position: absolute;
  top: 16px;
}

.row {
  padding-bottom: 1em;
}
</style>
