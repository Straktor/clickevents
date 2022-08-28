<template>
  <v-row>
    <v-col cols="6">
      <p># of points</p>
      <base-text-field
        v-model="message"
        placeholder="50"
      />
    </v-col>

    <v-col cols="6">
      <p>Confidence level</p>
      <base-text-field
        v-model="message"
        placeholder="4"
      />
    </v-col>
    <v-col cols="6">
      <p>List of tasks</p>
      <base-text-area
        v-model="message"
        placeholder="AUTO-1001, AUTO-1002"
      />
    </v-col>
    <v-col cols="6">
      <p>Risks</p>
      <base-text-area
        v-model="message"
        placeholder="We have a team member on call"
      />
    </v-col>
    <v-col cols="12">
      <p>Comments</p>
      <base-text-area
        v-model="message"
        placeholder="Testing"
      />
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'EstimationCard',
  components: {
  },
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
