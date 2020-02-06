import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCyvyD0MH-LPov5jpUex57ToEuCbn29J08",
  authDomain: "crwn-db-4393a.firebaseapp.com",
  databaseURL: "https://crwn-db-4393a.firebaseio.com",
  projectId: "crwn-db-4393a",
  storageBucket: "crwn-db-4393a.appspot.com",
  messagingSenderId: "820688777706",
  appId: "1:820688777706:web:934adbed7bb19906588293",
  measurementId: "G-34Q0E54R39"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
