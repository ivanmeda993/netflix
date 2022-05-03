import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCi1A47MkqL_-HXlqLXxZXX4awlcYz_ww",
  authDomain: "neflix-clone-abf29.firebaseapp.com",
  projectId: "neflix-clone-abf29",
  storageBucket: "neflix-clone-abf29.appspot.com",
  messagingSenderId: "588640993208",
  appId: "1:588640993208:web:b00272dd5ffb55b03c994d",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };