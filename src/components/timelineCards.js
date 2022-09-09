import { Data } from "dataclass";
import {
  VTextField,
  VTextarea,
  VCheckbox,
  VCombobox,
  VProgressLinear,
  VRating,
} from "vuetify/lib";

class TimelineCard extends Data {
  label = "Unknown Timeline item type";
  color = "black";
  icon = "mdi-plus-thick";
  fields = [];
}

class Field extends Data {
  label = "";
  type = VTextField;
  size = "m";
  placeholder = "";
  items = [];
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
      type: VRating,
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
      placeholder: "Useful comments",
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
      label: "In production",
      type: VCheckbox,
      size: "s",
    }),
  ],
});

let appreciationCard = TimelineCard.create({
  label: "Appreciation Points",
  color: "cPink",
  icon: "mdi-star-face",
  fields: [
    Field.create({
      label: "# of points",
      placeholder: "5",
      size: "s",
    }),
    Field.create({
      label: "From",
      placeholder: "Babette",
      size: "s",
    }),
    Field.create({
      label: "Reason for points",
      type: VTextarea,
      placeholder: "Points for fixing the bug in production!",
      size: "lg",
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
      label: "Confidence level",
      type: VRating,
      placeholder: "4",
      size: "s",
    }),
    Field.create({
      label: "Estimation Percentage completed",
      placeholder: "33",
      type: VProgressLinear,
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
      type: VRating,
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
      type: VCombobox,
      items: ["Team 1", "Team 2", "Team 3", "Team 4"],
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

let newEntryCard = TimelineCard.create({
  label: "Add a new entry",
  color: "cRed",
  icon: "mdi-alert-decagram",
  fields: [],
});

export {
  defaultCard,
  appreciationCard,
  retroCard,
  codeReviewCard,
  stretchGoalCard,
  checkInCard,
  progessCard,
  estimationCard,
  taskCard,
  newEntryCard,
};
