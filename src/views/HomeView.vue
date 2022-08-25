<template>
  <v-row>
    <v-col>
      <v-sheet
        min-height="90vh"
        rounded="lg"
        class="test2"
      >
        <v-timeline dense>
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            icon="mdi-star"
            fill-dot
          >
            <v-card
              rounded="lg"
              dark
              :color="item.color"
            >
              <v-card-title class="text-h6">
                {{ item.type }}
              </v-card-title>
              <v-card-text class="white text--primary">
                <div
                  v-for="(c, i) in item.content"
                  :key="i"
                >
                  -{{ c }}
                </div>
                <!-- v-if type is this then add component, mode for editing (true or false, if false then read only) -->
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-sheet>
    </v-col>
    <v-col cols="3">
      <v-sheet
        rounded="lg"
        class="rightPanel"
        min-height="90vh"
      >
        <h2 class="rightPanel-title">Teams</h2>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data () {
    return {
      items: [
        {
          color: "cGreen",
          type: "Estimation",
          content: [
            "Number of points",
            "List of tasks",
            "Risks",
            "Confidence level",
            "Comments",
          ],
        },
        {
          color: "cPink",
          type: "Task completed",
          content: ["Task", "Number of points", "In production checkbox"],
        },
        {
          color: "cOrange",
          type: "Progress Report",
          content: [
            "Number of items completed",
            "Confidence check",
            "Percentage completed (Progress bar)",
          ],
        },
        {
          color: "cRed",
          type: "Team Check-in",
          content: ["Format of check in", "Details (free form comments)"],
        },
        {
          color: "cGreen",
          type: "New Stretch Goal",
          content: [
            "Task (jira number)",
            "Number of points added",
            "Confidence check",
          ],
        },
        {
          color: "cPink",
          type: "Code Review Completed",
          content: [
            "Task",
            "Team Code Review Completed For",
            "Link to CR in gitlab",
          ],
        },
        {
          color: "cOrange",
          type: "Retrospective Meeting",
          content: [
            "Would more/less planning time be better",
            "What could the team have done to increase velocity",
            "What would you change if you did it again?",
            "How did you handle WIPs? (Limit the number of them, each person has a WIP task, etc.)",
            "What are the other key takeaways",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.test2 {
  margin-top: 15px;
  background-color: transparent;
  text-align: left;
}

.v-timeline::before {
  height: calc(100% - 90px);
  left: calc(48px - 2px);
  top: 42px;
  width: 4px;
  background-color: var(--v-cYellow-base);
}

.v-timeline::after {
  content: "";
  position: absolute;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid var(--v-cYellow-base);
  transform: rotate(270deg);
  top: calc(100% - 54px);
  left: calc(48px - 4px);
}

.v-timeline-item__body > .v-card:not(.v-card--flat)::after,
.v-timeline-item__body > .v-card:not(.v-card--flat):not(.v-card--link)::before {
  top: 25px;
}

::v-deep .v-timeline-item__dot {
  position: absolute;
  top: 16px;
}

.v-card__title {
  font-family: pricedown !important;
  font-size: 25px !important;
}

.rightPanel {
  margin: 15px;
  margin-top: 30px;
  outline: 15px dotted var(--v-cYellow-base);
  outline-offset: 5px;
  background-color: var(--v-cPink-base);
  font-family: pricedown;

  .rightPanel-title {
    color: var(--v-cYellow-base);
    font-size: 35px;
  }
}
</style>
