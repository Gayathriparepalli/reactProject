import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDWzKhjW3ORfenhoXlpj3FXcPObG9CwcqY",
  authDomain: "react-firebase-auth-a44cf.firebaseapp.com",
  projectId: "react-firebase-auth-a44cf",
  storageBucket: "react-firebase-auth-a44cf.appspot.com",
  messagingSenderId: "498957575986",
  appId: "1:498957575986:web:ad7a1465e2e02ae307d92b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export { auth };
export default db;
