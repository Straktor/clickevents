<template>
  <v-card
    rounded="lg"
    :color="color"
    class="white--text"
  >
    <v-card-title class="pr-2">
      {{ title }}
      <div
        v-if="!hideDateTime"
        class="dateTimeStamp"
      >
        - {{ new Date(dateTimeStamp).toLocaleString([], {hour12: false}) }}
      </div>
      <v-spacer />

      <v-btn
        v-if="!hideReadOnly"
        small
        :color="color"
        dark
        elevation="0"
        :disabled="submitLoading"
        @click="editIconClicked()"
      >
        <v-icon>{{ readOnly ? 'mdi-pencil' : 'mdi-close-circle' }}</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text
      class="pt-2"
      :class="readOnly ? 'white' : `${color} lighten-5`"
    >
      <slot />
    </v-card-text>
    <v-expand-transition>
      <v-card-actions
        v-if="!readOnly && !hideReadOnly"
        class="px-4"
        :class="color"
      >
        <v-spacer />
        <v-btn
          class="white--text pa-4"
          plain
          :disabled="submitLoading"
          @click="cancel()"
        >
          Cancel
        </v-btn>
        <v-btn
          class="white--text pa-4"
          outlined
          :loading="submitLoading"
          @click="submit()"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-expand-transition>
  </v-card>
</template>

<script>

export default {
  name: 'BaseCard',
  props: {
    hideDateTime: {
      type: Boolean,
      default: false
    },
    hideReadOnly: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    dateTimeStamp: {
      type: Number
    },
    submitLoading: {
      type: Boolean,
      default: false
    },
  },
  data: () => {
    return {
      message: '',
    }
  },
  methods: {
    setReadOnly (v) {
      this.$emit('update:readOnly', v)
    },
    editIconClicked () {
      if (this.readOnly) this.setReadOnly(false)
      else this.cancel()
    },
    cancel () {
      this.setReadOnly(true)
      this.$emit('cancel')
    },
    submit () {
      this.$emit('submit')
    },
  }
}
</script>


<style lang="scss" scoped>
.v-card__title {
  font-size: 25px;
  font-family: pricedown;

  .dateTimeStamp {
    font-size: 0.7em;
    padding-left: 4px;
  }
}

.v-card__text {
  transition-property: background-color;
  transition-duration: 1s;
}
</style>
