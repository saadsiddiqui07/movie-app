import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfA_8ccuca1y8FcsbrvY3AWJwwjEMDgww",
  authDomain: "disney-movie-7.firebaseapp.com",
  projectId: "disney-movie-7",
  storageBucket: "disney-movie-7.appspot.com",
  messagingSenderId: "379470709508",
  appId: "1:379470709508:web:8f62e3a77d3f6a6265c651",
  measurementId: "G-L6KDMGCYZ6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
