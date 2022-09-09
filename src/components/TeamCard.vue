<template>
  <v-card
    rounded="lg"
    color="cPink"
    class="teamCard"
  >
    <v-card-title class="teamCard--title pb-0">
      <div class="teamInfo">
        <img
          :src="`https://avatars.dicebear.com/api/bottts/${team.name}.svg`"
          class="pa-1 mx-2"
        />
      </div>
      <div class="scoreCard">
        <img src="../assets/price_is_right_tag.png" />
        <span :class="`scoreCard--text-${variant}`">{{ teamStats?.points}}</span>
      </div>
    </v-card-title>
    <v-card-text class="teamCard--content">
      <span class="teamName">{{ team.name }}</span><br>
      {{ team.members.map(m => m.name).join(', ') }}<br><br>
      Items completed {{ teamStats?.numItemsCompleted }}<br>
      Points completed {{ teamStats?.pointsCompleted }}<br>
      Code reviews completed {{ teamStats?.CRCompleted }}<br>
      Eggs found {{ teamStats?.numEggs }}<br>
      Appreciation Points: {{ teamStats?.appPoints }}<br>

      <v-progress-linear
        height="25"
        :value="teamStats.percentageCompleted"
        color="cBlue darken-2"
        class="mt-2"
      >
        <strong class="white--text">
          {{ teamStats.percentageCompleted ? Math.ceil(teamStats.percentageCompleted) : 0 }}%
        </strong>
      </v-progress-linear>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    team: {
      type: Object,
      default: () => { }
    },
    teamStats: {
      type: Object,
      default: () => { }
    },
    variant: {
      type: Number,
      default: () => 1
    }
  },
  data: () => {
    return {
    }
  },
}
</script>


<style lang="scss" scoped>
.v-card {
  color: white;

  .v-card__text {
    color: white;
  }

  .v-card__title {
    font-size: 25px;
    font-family: pricedown;
  }
}

.teamCard {
  .teamCard--title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > .teamInfo {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > img {
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        width: 3.5em;
        background-image: url("../assets/bluebg.png");
        border: 3px solid var(--v-cYellow-base);
      }
    }

    & > .scoreCard {
      position: relative;
      text-align: center;
      color: black;

      & > img {
        width: 6.5em;
      }

      & > span {
        position: absolute;
        top: 50%;
        left: 55%;
        transform: translate(-50%, -50%);
        font-family: "Stylish Marker";
        font-size: 75px;

        &.scoreCard--text-1 {
          font-family: "vtks animal 2";
          font-size: 50px;
        }

        &.scoreCard--text-2 {
          font-family: "Bristol";
          font-size: 65px;
        }

        &.scoreCard--text-3 {
          font-family: "VTKS  mural";
          font-size: 65px;
        }
      }
    }
  }

  .teamCard--content {
    text-align: left;
    font-family: "Silkscreen", cursive;
    font-weight: bold;
  }

  .teamName {
    font-size: 35px;
    font-family: pricedown;
    font-weight: normal;
  }
}
</style>
