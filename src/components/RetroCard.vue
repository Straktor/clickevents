<template>
  <BaseCard :item="item">
    <v-row>
      <v-col v-for="(q, i) in questions"
        :key="i" 
        cols="12">
        <p>{{q}}</p>
        <v-textarea
          v-model="message"
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
import BaseCard from "@/components/BaseCard";

export default {
  name: "RetroCard",
  components: {
    BaseCard,
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data: () => {
    return {
      message: "",
      questions: [
        "Would more/less planning time be better?",
        "What could the team have done to increase velocity?",
        "What would you change if you did it again?",
        "How did you handle WIPs? (Limit the number of them, each person has a WIP task, etc.)?",
        "What are the other key takeaways?",
      ],
    };
  },
};
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
