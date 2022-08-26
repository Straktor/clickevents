<template>
  <v-card
    rounded="lg"
    dark
    :color="item.color"
  >
    <v-card-title>
      {{ item.label }}
    </v-card-title>
    <v-card-text class="white text--primary pt-2">
      <v-row>
        <v-col cols="6">
          <p>Number of points</p>
          <input
            v-model="message"
            placeholder="50"
          />
        </v-col>
        <v-col cols="6">
          <p>List of tasks</p>
          <textarea
            v-model="message"
            placeholder="AUTO-1001, AUTO-1002"
            filled
          ></textarea>
        </v-col>
        <v-col cols="6">
          <p>Risks</p>
          <textarea
            v-model="message"
            placeholder="We have a team member on call"
            filled
          ></textarea>
        </v-col>
        <v-col cols="6">
          <p>Confidence level</p>
          <input
            v-model="message"
            placeholder="4"
            filled
          />
        </v-col>
        <v-col cols="12">
          <p>Comments</p>
          <textarea
            v-model="message"
            placeholder="Testing"
            filled
          ></textarea>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'EstimationCard',
  props: {
    item: {
      type: Object,
      default: () => { }
    },
  },
  data: () => {
    return {
      message: ''
    }
  },
}
</script>


<style lang="scss" scoped>
.v-card__title {
  font-size: 25px;
  font-family: pricedown;
}
</style>
