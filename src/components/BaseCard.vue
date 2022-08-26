<template>
  <v-card
    rounded="lg"
    :color="item.color"
    class="white--text"
  >
    <v-card-title>
      {{ item.label }}
    </v-card-title>
    <v-card-text class="white pt-2">
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'BaseCard',
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
.v-card__title {
  font-size: 25px;
  font-family: pricedown;
}

.v-card__text {
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
}
</style>
