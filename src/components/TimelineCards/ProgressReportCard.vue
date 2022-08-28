<template>
  <v-row>
    <v-col cols="4">
      <p># of points Completed</p>
      <base-text-field
        v-model="message"
        placeholder="5"
      />
    </v-col>

    <v-col cols="4">
      <p># of items completed</p>
      <base-text-field
        v-model="message"
        placeholder="5"
      />
    </v-col>

    <v-col cols="4">
      <p>Confidence check</p>
      <base-text-field
        v-model="message"
        placeholder="AUTO-1001"
      />
    </v-col>

    <v-col cols="12">
      <p>Percentage completed</p>
      <base-text-field
        v-model="message"
        placeholder="33"
      />
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'ProgressReportCard',
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
