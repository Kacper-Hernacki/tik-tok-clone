import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ4G_coJ4qCHw6vXn8Ai57wv4gedgioqM",
  authDomain: "tik-tok-clone-7e530.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-7e530.firebaseio.com",
  projectId: "tik-tok-clone-7e530",
  storageBucket: "tik-tok-clone-7e530.appspot.com",
  messagingSenderId: "104538500314",
  appId: "1:104538500314:web:0f0e2219a3adeec67489e3",
  measurementId: "G-79VH3QXWZE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
