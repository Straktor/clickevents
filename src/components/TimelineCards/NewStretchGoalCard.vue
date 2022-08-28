<template>
  <v-row>
    <v-col cols="6">
      <p>Task added</p>
      <v-text-field
        v-model="message"
        placeholder="AUTO-1003"
        outlined
        hide-details
        dense
        rows="2"
      ></v-text-field>
    </v-col>
    <v-col cols="6">
      <p># of points</p>
      <v-text-field
        v-model="message"
        placeholder="50"
        outlined
        hide-details
        dense
      />
    </v-col>

    <v-col cols="6">
      <p>Confidence level</p>
      <v-text-field
        v-model="message"
        placeholder="4"
        outlined
        hide-details
        dense
      />
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'NewStretchGoalCard',
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
