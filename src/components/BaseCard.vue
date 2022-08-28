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
        @click="toggleReadOnly()"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text class="white pt-2">
      <slot />
    </v-card-text>
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
    toggleReadOnly () {
      this.setReadOnly(!this.readOnly)
    },
    cancel () {
      this.setReadOnly(true)
    },
    submit () {
      this.setReadOnly(true)
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
</style>
