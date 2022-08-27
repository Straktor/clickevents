<template>
  <v-card
    rounded="lg"
    :color="item.color"
    class="white--text"
  >
    <v-card-title class="pr-2">
      {{ item.label }}
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
        :color="item.color"
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
      :class="item.color"
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
    item: {
      type: Object,
      default: () => { }
    },
  },
  data: () => {
    return {
      message: '',
      readOnly: true
    }
  },
  methods: {
    toggleReadOnly () {
      // TODO: Change readonly to a prop
      //this.$emit('readOnly', !this.readOnly)
      this.readOnly = !this.readOnly
    },
    cancel () {
      this.readOnly = true
    },
    submit () {
      this.readOnly = true
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
