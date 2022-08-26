<template>
  <BaseCard :item="item">
    <v-row>
      <v-col cols="4">
        <p># of points Completed</p>
        <v-text-field
          v-model="message"
          placeholder="5"
          outlined
          hide-details
          dense
        />
      </v-col>

      <v-col cols="4">
        <p># of items completed</p>
        <v-text-field
          v-model="message"
          placeholder="5"
          outlined
          hide-details
          dense
        />
      </v-col>

      <v-col cols="4">
        <p>Confidence check</p>
        <v-text-field
          v-model="message"
          placeholder="AUTO-1001"
          outlined
          hide-details
          dense
        />
      </v-col>

      <v-col cols="12">
        <p>Percentage completed</p>
        <v-text-field
          v-model="message"
          placeholder="33"
          outlined
          hide-details
          dense
        />
      </v-col>
    </v-row>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard'

export default {
  name: 'ProgressReportCard',
  components: {
    BaseCard
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
