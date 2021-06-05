import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA2giO_JaOvTrwv4Obj7xodZgBBtA54hyc",
  authDomain: "uas-development.firebaseapp.com",
  databaseURL:
    "https://uas-development-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uas-development",
  storageBucket: "uas-development.appspot.com",
  messagingSenderId: "777631131027",
  appId: "1:777631131027:web:c2a651a8c8c26f3943f466",
});

export const auth = app.auth();
export default app;
