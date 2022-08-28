import { Data } from "dataclass";
import { VTextField, VTextarea, VCheckbox } from "vuetify/lib";

class TimelineCard extends Data {
  label = "Unknown Timeline item type";
  color = "black";
  icon = "mdi-plus";
  fields = [];
}

class Field extends Data {
  label = "";
  type = VTextField;
  size = "m";
  placeholder = "";
}

let defaultCard = TimelineCard.create();

let estimationCard = TimelineCard.create({
  label: "Estimation",
  color: "cGreen",
  icon: "mdi-account-hard-hat",
  fields: [
    Field.create({
      label: "# of points",
      placeholder: "50",
    }),
    Field.create({
      label: "Confidence level",
      placeholder: "4",
    }),
    Field.create({
      label: "List of tasks",
      type: VTextarea,
      placeholder: "AUTO-1001, AUTO-1002",
    }),
    Field.create({
      label: "Risks",
      type: VTextarea,
      placeholder: "We have a team member on call",
    }),
    Field.create({
      label: "Comments",
      type: VTextarea,
      placeholder: "Testing",
      size: "lg",
    }),
  ],
});

let taskCard = TimelineCard.create({
  label: "Task completed",
  color: "cPink",
  icon: "mdi-check-bold",
  fields: [
    Field.create({
      label: "# of points",
      placeholder: "5",
      size: "s",
    }),
    Field.create({
      label: "Task",
      placeholder: "AUTO-1001",
      size: "s",
    }),
    Field.create({
      label: "List of tasks",
      type: VCheckbox,
      size: "s",
    }),
  ],
});

let progessCard = TimelineCard.create({
  label: "Progress Report",
  color: "cOrange",
  icon: "mdi-chart-areaspline",
  fields: [
    Field.create({
      label: "# of points Completed",
      placeholder: "5",
      size: "s",
    }),
    Field.create({
      label: "# of items completed",
      placeholder: "5",
      size: "s",
    }),
    Field.create({
      label: "Confidence check",
      placeholder: "AUTO-1001",
      size: "s",
    }),
    Field.create({
      label: "Percentage completed",
      placeholder: "33",
      size: "lg",
    }),
  ],
});

let checkInCard = TimelineCard.create({
  label: "Team Check-in",
  color: "cRed",
  icon: "mdi-human-queue",
  fields: [
    Field.create({
      label: "Format of check in",
      placeholder: "Huddle, call, message, etc.",
      size: "lg",
    }),
    Field.create({
      label: "Details",
      type: VTextarea,
      placeholder: "Daily @ 9am",
      size: "lg",
    }),
  ],
});

let stretchGoalCard = TimelineCard.create({
  label: "New Stretch Goal",
  color: "cGreen",
  icon: "mdi-rocket-launch",
  fields: [
    Field.create({
      label: "Task added",
      placeholder: "AUTO-1003",
      size: "s",
    }),
    Field.create({
      label: "# of points",
      placeholder: "50",
      size: "s",
    }),
    Field.create({
      label: "Confidence level",
      placeholder: "4",
      size: "s",
    }),
  ],
});

let codeReviewCard = TimelineCard.create({
  label: "Code Review Completed",
  color: "cPink",
  icon: "mdi-file-chart-check",
  fields: [
    Field.create({
      label: "Task",
      placeholder: "AUTO-1003",
    }),
    Field.create({
      label: "Team completed for",
      placeholder: "Team 2",
    }),
  ],
});

let questions = [
  "Would more/less planning time be better?",
  "What could the team have done to increase velocity?",
  "What would you change if you did it again?",
  "How did you handle WIPs? (Limit the number of them, each person has a WIP task, etc.)?",
  "What are the other key takeaways?",
];

let retroCard = TimelineCard.create({
  label: "Retrospective Meeting",
  color: "cOrange",
  icon: "mdi-heart-multiple",
  fields: questions.map((q) => {
    return Field.create({ label: q, size: "lg", type: VTextarea });
  }),
});

export {
  defaultCard,
  retroCard,
  codeReviewCard,
  stretchGoalCard,
  checkInCard,
  progessCard,
  estimationCard,
  taskCard,
};