// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
// import "firebase/compat/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDWzKhjW3ORfenhoXlpj3FXcPObG9CwcqY",
//   authDomain: "react-firebase-auth-a44cf.firebaseapp.com",
//   projectId: "react-firebase-auth-a44cf",
//   storageBucket: "react-firebase-auth-a44cf.appspot.com",
//   messagingSenderId: "498957575986",
//   appId: "1:498957575986:web:ad7a1465e2e02ae307d92b",
// };

// const firebaseDB = firebase.initializeApp(firebaseConfig);

// const db = firebaseDB.database().ref();
// const auth = firebase.auth();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

// export { auth, googleAuthProvider, facebookAuthProvider, db };

// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
// import "firebase/compat/auth";

// var firebaseConfig = {
//   // your firebase configuration goes here
// };

// const firebaseDB = firebase.initializeApp(firebaseConfig);

// const db = firebaseDB.database().ref();
// const auth = firebase.auth();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

// export { auth, googleAuthProvider, facebookAuthProvider, db };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, FacebookAuthProvider } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDWzKhjW3ORfenhoXlpj3FXcPObG9CwcqY",
  authDomain: "react-firebase-auth-a44cf.firebaseapp.com",
  projectId: "react-firebase-auth-a44cf",
  storageBucket: "react-firebase-auth-a44cf.appspot.com",
  messagingSenderId: "498957575986",
  appId: "1:498957575986:web:ad7a1465e2e02ae307d92b",
};

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { auth };
export default db;
export { googleAuthProvider, facebookAuthProvider };
