<template>
  <BaseCard :item="item">
    <v-row>
      <v-col cols="4">
        <p># of points</p>
        <v-text-field
          v-model="message"
          placeholder="5"
          outlined
          hide-details
          dense
        />
      </v-col>

      <v-col cols="4">
        <p>Task</p>
        <v-text-field
          v-model="message"
          placeholder="AUTO-1001"
          outlined
          hide-details
          dense
        />
      </v-col>
      <v-col cols="4">
        <p>In Production</p>
        <v-checkbox
          v-model="message"
          placeholder="AUTO-1001, AUTO-1002"
          outlined
          hide-details
          dense
          rows="2"
        ></v-checkbox>
      </v-col>
    </v-row>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/BaseCard'

export default {
  name: 'TaskCard',
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
