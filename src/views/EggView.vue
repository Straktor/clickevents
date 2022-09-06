<template>
  <v-row class="egg">
    <v-col v-if="!selectedTeam">
      <v-card
        color="cOrange"
        rounded="lg"
      >
        <v-card-title>
          easter eggs
          <v-icon
            large
            color="white"
            class="pl-3"
          >
            mdi-egg-easter
          </v-icon>
        </v-card-title>
        <v-card-text class="cOrange aboutTheEvent lighten-5">
          <h2>Let the hunt begin!</h2>
          <p>
            Lets see how many each team can find
          </p>
          <div class="selectTeamSection">
            <div>To get started please select a team</div>
            <v-icon right> mdi-arrow-right-bold </v-icon>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col v-if="selectedTeam">
      <h1 class="mainTitle ma-0 pa-0 ml-8">Eggs found by {{ selectedTeam.name }}</h1>

      <v-card
        rounded="lg"
        color="cOrange"
      >
        <v-card-title>
          <v-icon
            large
            color="white"
            class="pr-3"
          >
            mdi-flag
          </v-icon>
          Flags
        </v-card-title>
        <v-card-text class="cOrange lighten-5 pt-3">
          <div class="flagSubmitContainer">
            <v-text-field
              outlined
              filled
              dense
              placeholder="CTF{...}"
              hide-details
              append-icon="mdi-incognito"
              class="shrink px-4"
            />
            <v-btn
              class="cGreen--text pa-4"
              outlined
            >
              Submit
            </v-btn>
          </div>
        </v-card-text>
      </v-card>

      <v-card
        rounded="lg"
        color="cOrange"
      >
        <v-card-title>
          List of easter eggs
          <v-icon
            large
            color="white"
            class="pl-3"
          >
            mdi-egg-easter
          </v-icon>
        </v-card-title>
        <v-card-text class="cOrange lighten-5 pt-3">
          <v-expansion-panels
            rounded="lg"
            class="py-4"
          >
            <v-expansion-panel
              v-for="(e, i) in eggs"
              :key="i"
            >
              <v-expansion-panel-header :color="`${colors[e.tags]} lighten-3`">
                <div class="headerRow">
                  <span class="numbers">{{ i + 1 }}: </span>
                  <v-icon class="px-3">{{ icons[e.tags] }}</v-icon>
                  <span>{{ e.name }}</span>
                  <v-icon
                    class="checkmarkIcon pr-1"
                    color="cGreen"
                    large
                  >
                    mdi-check-bold
                  </v-icon>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content
                class="pt-3"
                :color="`${colors[e.tags]} lighten-5`"
              >
                <p>
                  {{ e.hint }}
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4">
      <TeamPanel type="eggteams" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

import TeamPanel from '@/components/TeamPanel'

export default {
  components: { TeamPanel },
  data () {
    return {
      icons: {
        css: 'mdi-language-css3',
        exploring: 'mdi-compass',
        network: 'mdi-ip-network-outline',
        javascript: 'mdi-language-javascript',
        trivia: 'mdi-head-question',
      },
      colors: {
        css: 'cRed',
        exploring: 'cBlue',
        network: 'cOrange',
        javascript: 'cGreen',
        trivia: 'cPink',
      },
      eggs: [
        {
          name: "The best team!",
          hint: 'Do you really need an hint?',
          tags: 'trivia'
        },
        {
          name: 'In plain sight',
          hint: '',
          tags: 'css'
        },
        {
          name: 'The explorer',
          hint: 'Take your time and look around... it is as simple as that',
          tags: 'exploring'
        },
        {
          name: 'The obvious one',
          hint: 'Do you speak javascript? I would try reading some!',
          tags: 'javascript'
        },
        {
          name: 'Useless loading',
          hint: 'We have to be careful when requesting information... sometime we ask for too much',
          tags: 'network'
        },
        {
          name: "Hello World!",
          hint: 'You should always start by trying a simple hello world.',
          tags: 'exploring'
        },
        {
          name: 'Encoded',
          hint: 'This is where we notice the big difference between encoding, encrypting and hashing.  Only one of them can be decoded with no additional information.',
          tags: 'javascript'
        },
        {
          name: 'The Blacksmith',
          hint: 'Blacksmiths are great a forging, maybe you should try it.',
          tags: 'network'
        },
        {
          name: 'Thanks for reading',
          hint: 'When you take your time and read all the rules you have a better knowledge of what you need to do.',
          tags: 'exploring'
        },
        {
          name: 'On the wire',
          hint: 'It pays off to watch the traffic.',
          tags: 'network'
        },
        {
          name: 'Smart Planning',
          hint: 'Some tools are great for planning. Explore them, I am sure that you will find what you are looking for.',
          tags: 'exploring'
        },
        {
          name: "Smart People",
          hint: '10001th prime number.',
          tags: 'trivia'
        },
        {
          name: "The PO's favorite",
          hint: 'Product owners loves it when you take your time and read the tasks.',
          tags: 'exploring'
        },
      ]
    };
  },
  computed: {
    ...mapGetters(['selectedTeam']),
  },
}
</script>

<style lang="scss" scoped>
.flagSubmitContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card {
  margin-top: 1.5em;

  .v-card__title {
    color: white;
    text-align: center;
    font-family: pricedown;
    font-size: 45px;
    display: flex;
    justify-content: center;
  }

  .v-card__text {
    padding-left: 2em;
    padding-right: 2em;

    font-size: 16px;

    h2,
    h3 {
      text-align: center;
      padding-bottom: 0.5em;
      padding-top: 0.5em;
    }

    h2 {
      padding-bottom: 1em;
      text-decoration: underline;
    }

    .v-expansion-panel-header > div > i {
      line-height: 15px;
    }

    .headerRow {
      display: flex;

      span {
        font-weight: bold;
        font-size: 16px;
      }

      .checkmarkIcon {
        margin-left: auto;
      }
    }
  }
}

h1.mainTitle {
  font-size: 50px;
  color: var(--v-cYellow-base);
  text-align: center;
  font-family: pricedown;
}

.selectTeamSection {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
}
</style>