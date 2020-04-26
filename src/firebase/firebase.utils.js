import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAqBx4n-RZlItlzy8wxkGd5oVN8e8YQ2N8",
  authDomain: "ecommerce-9fbaa.firebaseapp.com",
  databaseURL: "https://ecommerce-9fbaa.firebaseio.com",
  projectId: "ecommerce-9fbaa",
  storageBucket: "ecommerce-9fbaa.appspot.com",
  messagingSenderId: "1086167799721",
  appId: "1:1086167799721:web:fdecca419ec949187ed6b8",
  measurementId: "G-MXGTPKHMB7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
