<template>
  <v-row>
    <v-col cols="12">
      <p>Format of check in</p>
      <v-text-field
        v-model="message"
        placeholder="Huddle, call, message, etc."
        outlined
        hide-details
        dense
      />
    </v-col>

    <v-col cols="12">
      <p>Details</p>
      <v-textarea
        v-model="message"
        placeholder="Daily @ 9am"
        outlined
        hide-details
        dense
        rows="2"
      />
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'CheckInCard',
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
