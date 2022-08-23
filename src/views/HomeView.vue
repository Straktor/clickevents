<template>
  <v-row>
    <v-col>
      <v-sheet min-height="90vh" rounded="lg" class="test2">
        <v-timeline dense>
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            icon="mdi-star"
            fill-dot
          >
            <v-card rounded="lg" dark :color="item.color">
              <v-card-title class="text-h6">
                {{ item.type }}
              </v-card-title>
              <v-card-text class="white text--primary">
                <div v-for="(c, i) in item.content" :key="i">-{{ c }}</div>
                <!-- v-if type is this then add component, mode for editing (true or false, if false then read only) -->
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-sheet>
    </v-col>
    <v-col cols="3">
      <v-sheet rounded="lg" class="rightPanel" min-height="90vh">
        <h2 class="rightPanel-title">Teams</h2>
        <!-- <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list> -->
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      items: [
        {
          color: "#2c773f",
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
          color: "#dc2261",
          type: "Task completed",
          content: ["Task", "Number of points", "In production checkbox"],
        },
        {
          color: "#f8a73f",
          type: "Progress Report",
          content: [
            "Number of items completed",
            "Confidence check",
            "Percentage completed (Progress bar)",
          ],
        },
        {
          color: "#ec200c",
          type: "Team Check-in",
          content: ["Format of check in", "Details (free form comments)"],
        },
        {
          color: "#2c773f",
          type: "New Stretch Goal",
          content: [
            "Task (jira number)",
            "Number of points added",
            "Confidence check",
          ],
        },
        {
          color: "#dc2261",
          type: "Code Review Completed",
          content: [
            "Task",
            "Team Code Review Completed For",
            "Link to CR in gitlab",
          ],
        },
        {
          color: "#f8a73f",
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
.fakeclassforcolorpallet {
  color: #ec200c;
  color: #faf817;
  color: #fbbf5d;
  color: #dc2261;
  color: #2c773f;
  color: #628ecf;
  color: #f8a73f;
}

.test2 {
  margin-top: 15px;
  background-color: transparent;
}

.v-card__title {
  font-family: pricedown !important;
  font-size: 25px !important;
}

.rightPanel {
  margin: 15px;
  outline: 15px dotted #faf817;
  outline-offset: 5px;
  background-color: #dc2261;
  font-family: pricedown;

  .rightPanel-title {
    color: #faf817;
    font-size: 35px;
  }
}

nav.rightDrawer {
  border-left: 10px dotted #faf817 !important;
  padding: 0;
  color: #fff;
  font-family: pricedown;
  font-size: 25px;
  background-color: transparent !important;

  .rightDrawer-title {
    padding: 0.5em;
  }
}

::v-deep .v-navigation-drawer__content {
  background-color: #dc2261;
  margin-left: 0.1em;
}

::v-deep .v-navigation-drawer__border {
  background-color: transparent !important;
}
</style>
