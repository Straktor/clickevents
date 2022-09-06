const functions = require("firebase-functions");

const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

initializeApp();
const db = getFirestore();

let checkIfLoggedIn = (context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "Not logged in."
    );
  }
};

let checkIfPartOfTeamOrAdmin = (teamId, context) => {
  // Get user and check if he is admin or part of the teamId
  // if (!teamId) raise
  // TODO: Raise an error if user is not part of the team of admin
};

exports.createEvent = functions.https.onCall(async (data, context) => {
  checkIfLoggedIn(context);
  checkIfPartOfTeamOrAdmin(data.teamId, context);

  // {
  //  teamId: '869p8tFb1RZaWbjVc8m7',
  //  type: 'Estimation'
  //  values: {
  //    '# of points': 50,
  //    'Confidence level': 3,
  //  }
  // }

  await db.collection("events").add({
    ...data,
    createdAt: FieldValue.serverTimestamp(),
  });
});

exports.updateEvent = functions.https.onCall(async (data, context) => {
  checkIfLoggedIn(context);
  checkIfPartOfTeamOrAdmin(data.teamId, context);

  // {
  //   id: 'AKJSDFYH89F3423245',
  //   teamId: "869p8tFb1RZaWbjVc8m7",
  //   type: "Estimation",
  //   values: {
  //     "# of points": "50",
  //     "Confidence level": 3,
  //   },
  // };

  // Remove id from event object
  let docId = data.id;
  delete data.id;
  delete data.createdAt;

  const eventRef = db.collection("events").doc(docId);
  await eventRef.set(data, { merge: true });
});

exports.solveEggs = functions.https.onCall(async (data, context) => {
  checkIfLoggedIn(context);
  checkIfPartOfTeamOrAdmin(data.teamId, context);

  // {
  //   teamId: "869p8tFb1RZaWbjVc8m7",
  //   flag: "click",
  //   solved: false,
  // };

  let eggs = [
    { name: "The best team!", flag: "click" },
    { name: "In plain sight", flag: "" },
    { name: "The explorer", flag: "" },
    { name: "The obvious one", flag: "" },
    { name: "Useless loading", flag: "" },
    { name: "Hello World!", flag: "hello world!" },
    { name: "Encoded", flag: "" },
    { name: "Famous Bob", flag: "" },
    { name: "The Blacksmith", flag: "" },
    { name: "Thanks for reading", flag: "" },
    { name: "On the wire", flag: "" },
    { name: "Smart Planning", flag: "" },
    { name: "Smart People", flag: "" },
    { name: "The PO's favorite", flag: " " },
  ];

  let egg = eggs.find((e) => e.flag.toLowerCase() === data.flag.toLowerCase());

  if (egg) {
    // TODO: Check if egg was already found by this team
    await db.collection("eggs").add({
      teamId: data.teamId,
      name: egg.name,
      createdAt: FieldValue.serverTimestamp(),
    });
  }
});
