import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeNSbnxxENGP7DefB6otjO4K2u0VLqQSg",
  authDomain: "e-clone-f6650.firebaseapp.com",
  projectId: "e-clone-f6650",
  storageBucket: "e-clone-f6650.appspot.com",
  messagingSenderId: "313313253018",
  appId: "1:313313253018:web:6f15cddb8d455a47747123",
  measurementId: "G-4FTVR6RXG2",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
