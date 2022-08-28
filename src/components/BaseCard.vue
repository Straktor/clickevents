<template>
  <v-card
    rounded="lg"
    :color="color"
    class="white--text"
  >
    <v-card-title class="pr-2">
      {{ title }}
      -
      <!--
        TODO: Get date from Props
        TODO: Proper Date to string (Remove seconds and 24h format)
      -->
      <div class="dateTimeStamp">
        2022-08-27 14:08
      </div>
      <v-spacer />

      <v-btn
        small
        :color="color"
        dark
        elevation="0"
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
        v-if="!readOnly"
        class="px-4"
        :class="color"
      >
        <v-spacer />
        <v-btn
          class="white--text pa-4"
          plain
          @click="cancel()"
        >
          Cancel
        </v-btn>
        <v-btn
          class="white--text pa-4"
          outlined
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
      this.setReadOnly(true)
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
