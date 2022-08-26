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
              <v-card-text class="white text--primary pt-2">
                <div v-if="item.type == 'Estimation'">
                  <v-row>
                    <v-col cols="6">
                      <p>Number of points</p>
                      <input v-model="message" placeholder="50" />
                    </v-col>
                    <v-col cols="6">
                      <p>List of tasks</p>
                      <textarea v-model="message" placeholder="AUTO-1001, AUTO-1002" filled></textarea>
                    </v-col>
                    <v-col cols="6">
                      <p>Risks</p>
                      <textarea v-model="message" placeholder="We have a team member on call" filled></textarea>
                    </v-col>
                    <v-col cols="6">
                      <p>Confidence level</p>
                      <input v-model="message" placeholder="4" filled/>
                    </v-col>
                    <v-col cols="6">
                      <p>Comments</p>
                      <textarea v-model="message" placeholder="Testing" filled></textarea>
                    </v-col>
                  </v-row>
                </div>
                <!-- <div
                  v-for="(c, i) in item.content"
                  :key="i"
                >
                  -{{ c }}
                </div> -->
                <!-- v-if type is this then add component, mode for editing (true or false, if false then read only) -->
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-sheet>
    </v-col>
    <v-col cols="4">
      <v-sheet rounded="lg" class="rightPanel pa-2">
        <h2 class="rightPanel-title">Teams</h2>
        <TeamCard teamName="TeamName" text="Lorem Ipsium" />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import TeamCard from "@/components/TeamCard";

export default {
  name: "HomeView",
  components: { TeamCard },
  data() {
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
  top: 42px;
  width: 4px;
  background-color: var(--v-cYellow-base);
}

.v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse)::before {
  left: calc(48px - 2px);
}

.v-timeline::after {
  content: "";
  position: absolute;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid var(--v-cYellow-base);
  transform: rotate(270deg);
  top: calc(100% - 54px);
  left: calc(48px - 5px);
}

.v-timeline-item__body > .v-card:not(.v-card--flat)::after,
.v-timeline-item__body > .v-card:not(.v-card--flat):not(.v-card--link)::before {
  top: 25px;
}

::v-deep .v-timeline-item__dot {
  position: absolute;
  top: 16px;
}

.rightPanel {
  position: relative;
  margin: 15px;
  margin-top: 30px;

  outline-offset: 5px;
  background-color: var(--v-cGreen-base);
  font-family: pricedown;

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    bottom: -20px;
    right: -20px;
    border: 15px var(--v-cYellow-base) dotted;
  }

  .rightPanel-title {
    color: var(--v-cYellow-base);
    font-size: 50px;
  }
}
</style>
