let mockTeams = [
  {
    id: 1,
    name: "Team 1",
    points: 27,
    numItems: 5,
    numItemsCompleted: 3,
    CRCompleted: 2,
    pointsCompleted: 11,
    percentageCompleted: 33,
    members: [
      {
        id: 1,
        name: "Liam",
      },
      {
        id: 2,
        name: "Olivia",
      },
      {
        id: 3,
        name: "Noah",
      },
      {
        id: 4,
        name: "Emma",
      },
      {
        id: 5,
        name: "Oliver",
      },
      {
        id: 6,
        name: "Charlotte",
      },
    ],
    events: [
      {
        id: 1,
        type: "Estimation",
        values: { "# of points": "This works!", "Confidence level": 3 },
      },
      { id: 2, type: "Appreciation Points", values: {} },
      { id: 3, type: "Task completed", values: {} },
      { id: 4, type: "Progress Report", values: {} },
      { id: 5, type: "Team Check-in", values: {} },
      { id: 6, type: "New Stretch Goal", values: {} },
      { id: 7, type: "Code Review Completed", values: {} },
      { id: 8, type: "Retrospective Meeting", values: {} },
    ],
  },
  {
    id: 2,
    name: "Team 2",
    points: 85,
    numItems: 10,
    numItemsCompleted: 4,
    CRCompleted: 1,
    pointsCompleted: 21,
    percentageCompleted: 42,
    members: [
      {
        id: 7,
        name: "Elijah",
      },
      {
        id: 8,
        name: "Amelia",
      },
      {
        id: 9,
        name: "James",
      },
      {
        id: 10,
        name: "William",
      },
      {
        id: 11,
        name: "Sophia",
      },
      {
        id: 12,
        name: "Ava",
      },
    ],
    events: [],
  },
  {
    id: 3,
    name: "Team 3",
    points: 13,
    numItems: 6,
    numItemsCompleted: 4,
    CRCompleted: 5,
    pointsCompleted: 22,
    percentageCompleted: 80,
    members: [
      {
        id: 13,
        name: "Benjamin",
      },
      {
        id: 14,
        name: "Isabella",
      },
      {
        id: 15,
        name: "Lucas",
      },
      {
        id: 16,
        name: "Mia",
      },
      {
        id: 17,
        name: "Henry",
      },
    ],
    events: [
      {
        id: 12,
        type: "Estimation",
        values: { "# of points": "This works!", "Confidence level": 3 },
      },
    ],
  },
  {
    id: 4,
    name: "Team 4",
    points: 10,
    numItems: 7,
    numItemsCompleted: 3,
    CRCompleted: 1,
    pointsCompleted: 4,
    percentageCompleted: 55,
    members: [
      {
        id: 17,
        name: "Evelyn",
      },
      {
        id: 18,
        name: "Theodore",
      },
      {
        id: 19,
        name: "Harper",
      },
    ],
    events: [
      {
        id: 14,
        type: "Estimation",
        values: { "# of points": "This works!", "Confidence level": 3 },
      },
      { id: 15, type: "Appreciation Points", values: {} },
    ],
  },
];

export { mockTeams };
