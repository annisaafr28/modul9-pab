import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyBETlfQ1hU1ElPP6um-RSqmhiSRhZu-2l8",
  authDomain: "note-app-73609.firebaseapp.com",
  databaseURL: "https://note-app-73609-default-rtdb.firebaseio.com/",
  projectId: "note-app-73609",
  storageBucket: "note-app-73609.appspot.com",
  messagingSenderId: "572988739602",
  appId: "1:572988739602:web:e411abc1385f33392d88cb"
});

const FIREBASE = firebase;

export default FIREBASE;
