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

exports.createEvent = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "Not logged in."
    );
  }

  // {
  //  teamId: '869p8tFb1RZaWbjVc8m7',
  //  type: 'Estimation'
  //  values: {
  //    '# of points': 'gfsd',
  //    'Confidence level': 3,
  //    'List of tasks': 'sdgf',
  //    Risks: 'sdfg',
  //    Comments: 'sdgf'
  //  }
  // }

  // TODO: check that user belongs to the team or is admin
  await db.collection("events").add({
    ...data,
    createdAt: FieldValue.serverTimestamp(),
  });
});

exports.updateEvent = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "failed-precondition",
      "Not logged in."
    );
  }

  // {
  //   id: 'AKJSDFYH89F3423245',
  //   teamId: "869p8tFb1RZaWbjVc8m7",
  //   type: "Estimation",
  //   values: {
  //     "# of points": "gfsd",
  //     "Confidence level": 3,
  //     "List of tasks": "sdgf",
  //     Risks: "sdfg",
  //     Comments: "sdgf",
  //   },
  // };

  // Remove id from event object
  let docId = data.id;

  delete data.id;
  delete data.createdAt;

  // TODO: check that user belongs to the team or is admin
  const eventRef = db.collection("events").doc(docId);
  await eventRef.set(data, { merge: true });
});
