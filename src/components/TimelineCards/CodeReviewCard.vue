<template>
  <v-row>
    <v-col cols="6">
      <p>Task</p>
      <base-text-field
        v-model="message"
        placeholder="AUTO-1003"
      />
    </v-col>
    <v-col cols="6">
      <p>Team completed for</p>
      <base-text-field
        v-model="message"
        placeholder="Team 2"
      />
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'CodeReviewCard',
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
