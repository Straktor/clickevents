const functions = require("firebase-functions");
const axios = require("axios").default;

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

let getDiceBearImg = (str, isTeam) => {
  return `https://avatars.dicebear.com/api/${
    isTeam ? "bottts" : "croodles-neutral"
  }/${str}.png`;
};

let sendEventSlack = async (teamId, type, values, isNew, context) => {
  const email = context.auth.token.email || null;

  // Get team info
  let doc = await db.collection("teams").doc(teamId).get();
  let teamName = doc.data().name;

  let v = [];
  for (const k in values) {
    v.push(`• *${k}*: ${values[k]}`);
  }
  let vStr = v.join("\n");

  slackPayload = {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*${
        isNew ? "New" : "Modified"
      }: ${type}*\n*User: ${email}*\n*Team:* ${teamName}\n*Values:*\n${vStr}`,
    },
    accessory: {
      type: "image",
      image_url: getDiceBearImg(teamName, true),
      alt_text: "Team thumbmail",
    },
  };

  axios.post(
    "https://hooks.slack.com/services/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",
    {
      blocks: [slackPayload],
      icon_url: getDiceBearImg(email, false),
      channel: "#the-estimation-is-right",
    }
  );
};

let sendEggSlack = async (teamId, payload, flag, context) => {
  const email = context.auth.token.email || null;

  // Get team info
  let doc = await db.collection("teams").doc(teamId).get();
  let teamName = doc.data().name;

  slackPayload = {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*User: ${email}*\n*Team:* ${teamName}\n*Flag:* ${flag}\n*Payload:* ${JSON.stringify(
        payload
      )}`,
    },
    accessory: {
      type: "image",
      image_url: getDiceBearImg(teamName, true),
      alt_text: "Team thumbmail",
    },
  };

  axios.post(
    "https://hooks.slack.com/services/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",
    {
      blocks: [slackPayload],
      icon_url: getDiceBearImg(email, false),
      channel: "#eggAttempts",
    }
  );
};

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

  await sendEventSlack(data.teamId, data.type, data.values, true, context);
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

  await sendEventSlack(data.teamId, data.type, data.values, false, context);
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
    { name: "The eggs-plorer", flag: "9bx6HWen" },
    { name: "The obvious one", flag: "wW9S3MVcgzZ7QQ" },
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
    { name: "The PO's favorite", flag: "NTCwUgn2Vj" },
    { name: "Social Engineering", flag: "1880" },
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

  await sendEggSlack(data.teamId, data, data.flag, context);

  return {
    flag: flagFound,
    new: newFlag,
    checksum: "CE114E4501D2F4E2DCEA3E17B546F339",
  };
});
