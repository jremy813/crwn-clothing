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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
