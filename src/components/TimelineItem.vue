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
            v-if="!(isProgressField(f) && !readOnly)"
            :is="f.type"
            :value="localValues[f.label]"
            :placeholder="f.placeholder"
            outlined
            dense
            hide-details
            :disabled="readOnly"
            :class="getColorClass(f)"
            v-bind="getComponentProperties(f)"
            @input="e => localValues[f.label] = e"
          >
            <strong
              v-if="isProgressField(f)"
              class="white--text"
            >
              {{ localValues[f.label] ? Math.ceil(localValues[f.label]) : 0 }}%
            </strong>
            <template
              v-if="isRatingField(f)"
              v-slot:item="props"
            >
              <v-icon
                :color="props.isFilled ? 'cBlue' : 'grey lighten-1'"
                large
                @click="props.click"
              >
                {{ props.isFilled ? 'mdi-star-circle' : 'mdi-star-circle-outline' }}
              </v-icon>
            </template>
          </component>
          <!--
            Second v-progress-linear to handle
            weird behaviours when v-model is set
          -->
          <v-progress-linear
            v-if="isProgressField(f) && !readOnly"
            v-model="localValues[f.label]"
            height="25"
          >
            <strong
              v-if="isProgressField(f)"
              class="white--text"
            >
              {{ localValues[f.label] ? Math.ceil(localValues[f.label]) : 0 }}%
            </strong>
          </v-progress-linear>
        </v-col>
      </v-row>
    </BaseCard>
  </v-timeline-item>
</template>

<script>
import {
  VTextarea,
  VCombobox,
  VProgressLinear,
  VRating,
  VCheckbox,
} from "vuetify/lib";

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
    getComponentProperties (field) {
      switch (field?.type) {
        case VCombobox: return { items: field.items }
        case VProgressLinear: return { height: "25" }
        case VTextarea: return { rows: 2 }
        case VRating: return { readonly: this.readOnly }
      }
    },
    getColorClass (field) {
      if ([VProgressLinear, VCheckbox, VRating].includes(field?.type)) {
        return ''
      }

      return 'white'
    },
    isRatingField (field) {
      return !!(VRating === field?.type)
    },
    isProgressField (field) {
      return !!(VProgressLinear === field?.type)
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
