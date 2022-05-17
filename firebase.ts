// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB6CRpt3clOwdzGrc5opKj6VBH7dikRqU",
  authDomain: "movie-bd-7d5ca.firebaseapp.com",
  projectId: "movie-bd-7d5ca",
  storageBucket: "movie-bd-7d5ca.appspot.com",
  messagingSenderId: "112516322474",
  appId: "1:112516322474:web:925a7ce72d508a65d6acd3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
