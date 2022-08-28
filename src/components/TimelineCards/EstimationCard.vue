<template>
  <BaseCard :item="item">
    <v-row>
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
      <v-col cols="6">
        <p>List of tasks</p>
        <v-textarea
          v-model="message"
          placeholder="AUTO-1001, AUTO-1002"
          outlined
          hide-details
          dense
          rows="2"
        ></v-textarea>
      </v-col>
      <v-col cols="6">
        <p>Risks</p>
        <v-textarea
          v-model="message"
          placeholder="We have a team member on call"
          outlined
          hide-details
          dense
          rows="2"
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <p>Comments</p>
        <v-textarea
          v-model="message"
          placeholder="Testing"
          outlined
          hide-details
          dense
          rows="2"
        ></v-textarea>
      </v-col>
    </v-row>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard'

export default {
  name: 'EstimationCard',
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
