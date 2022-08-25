<template>
  <v-card
    rounded="lg"
    color="cPink"
    class="ma-3"
  >
    <v-card-title>
      {{ teamName }}
    </v-card-title>
    <v-card-text class="pt-2">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    teamName: {
      type: String,
      default: () => ''
    },
    text: {
      type: String,
      default: () => ''
    },
  },
  data: () => {
    return {}
  },
}
</script>


<style lang="scss" scoped>
.v-card {
  color: white;
  font-family: pricedown;

  .v-card__text {
    color: white;
  }

  .v-card__title {
    font-size: 25px;
  }
}
</style>
