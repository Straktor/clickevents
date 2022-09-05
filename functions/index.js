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

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

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
