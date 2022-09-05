import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

let app = undefined;
let db = undefined;
let auth = undefined;
let functions = undefined;

let initFirebase = () => {
  let firebaseConfig = {
    apiKey: "AIzaSyBMAgjAajAA4bAUgCTFYdTB-FpcXgPbv0I",
    authDomain: "clickevents-74628.firebaseapp.com",
    projectId: "clickevents-74628",
    storageBucket: "clickevents-74628.appspot.com",
    messagingSenderId: "594493136181",
    appId: "1:594493136181:web:0aa185142ee52d65e5c07c",
    measurementId: "G-GTC4NBW08C",
  };

  app = initializeApp(firebaseConfig);

  // TODO: Test analytics
  getAnalytics(app);
  db = getFirestore(app);
  auth = getAuth(app);

  functions = getFunctions(app);

  // Activate to test local functions
  connectFunctionsEmulator(functions, "localhost", 5001);
};

export { initFirebase, app, db, auth, functions };
