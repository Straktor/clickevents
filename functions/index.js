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

let checkIfPartOfTeamOrAdmin = async (teamId, context) => {
  if (!teamId) {
    throw new functions.https.HttpsError(
      "permission-denied",
      "TeamId not provided"
    );
  }

  const email = context.auth.token.email || null;

  const snapshot = await db
    .collection("users")
    .where("email", "==", email.toLowerCase())
    .get();

  if (snapshot.empty) {
    throw new functions.https.HttpsError(
      "permission-denied",
      "User not recognized."
    );
  }

  snapshot.forEach((doc) => {
    let user = doc.data();

    if (user?.role !== "admin" && user.teamId !== teamId) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "User needs to be part of the team or an admin."
      );
    }
  });
};

exports.createEvent = functions.https.onCall(async (data, context) => {
  checkIfLoggedIn(context);
  await checkIfPartOfTeamOrAdmin(data.teamId, context);

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
  await checkIfPartOfTeamOrAdmin(data.teamId, context);

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
  await checkIfPartOfTeamOrAdmin(data.teamId, context);

  // {
  //   teamId: "869p8tFb1RZaWbjVc8m7",
  //   flag: "click",
  //   solved: false,
  // };

  let eggs = [
    { name: "The best team!", flag: "click" },
    { name: "In plain sight", flag: "SiZi3tN" },
    { name: "The egg-plorer", flag: "9bx6HWen" },
    { name: "The obvious one", flag: "wW9S3MVcgzZ7QQ" },
    { name: "Useless loading", flag: "ea73ArBqJ8rcJb" },
    { name: "Hello World!", flag: "hello world!" },
    { name: "Encoded", flag: "aRjSWh1o2eg6Lb" },
    { name: "Famous Bob", flag: "Bob Barker" },
    {
      name: "The Blacksmith",
      flag: "THIS ONE IS DIFFERENT - SET solved flag to true",
    },
    { name: "Thanks for reading", flag: "Xp3Rbv6H" },
    { name: "On the wire", flag: "CE114E4501D2F4E2DCEA3E17B546F339" },
    { name: "Smart Planning", flag: "6XNiTLjF6jmmHM" },
    { name: "Extra Configuration", flag: "5142ee5" },
    { name: "Smart People", flag: "43 - 4 - 54 - 2015" },
    { name: "The PO's favorite", flag: "" },
  ];

  let egg = eggs.find((e) => e.flag.toLowerCase() === data.flag.toLowerCase());

  let flagFound = "";
  let newFlag = false;

  if (egg) {
    // Check if egg was already found by this team
    const snapshot = await db
      .collection("eggs")
      .where("name", "==", egg.name)
      .where("teamId", "==", data.teamId)
      .get();

    if (snapshot.empty) {
      // Add new egg
      await db.collection("eggs").add({
        teamId: data.teamId,
        name: egg.name,
        createdAt: FieldValue.serverTimestamp(),
      });
      newFlag = true;
    }

    flagFound = egg.name;
  }

  // The blacksmith special case
  if (data.solved) {
    let flagName = "The Blacksmith";

    const snapshot = await db
      .collection("eggs")
      .where("name", "==", flagName)
      .where("teamId", "==", data.teamId)
      .get();

    if (snapshot.empty) {
      // Add new egg
      await db.collection("eggs").add({
        teamId: data.teamId,
        name: flagName,
        createdAt: FieldValue.serverTimestamp(),
      });
      newFlag = true;
    }
    flagFound = flagName;
  }

  return {
    flag: flagFound,
    new: newFlag,
    checksum: "CE114E4501D2F4E2DCEA3E17B546F339",
  };
});
