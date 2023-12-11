import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCNGnx5Jhp-sCDwRTJCWXYGr6S63lfF6IA",
  authDomain: "project-b78cb.firebaseapp.com",
  databaseURL: "https://project-b78cb-default-rtdb.firebaseio.com",
  projectId: "project-b78cb",
  storageBucket: "project-b78cb.appspot.com",
  messagingSenderId: "274002390253",
  appId: "1:274002390253:web:15dfcdb9eeb86eff2030e4"
});

const FIREBASE = firebase;

export default FIREBASE;

