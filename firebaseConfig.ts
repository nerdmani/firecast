import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCRuoUTsDCQWOOOf6w08m_RP2nzv03UdDY",
  authDomain: "fire-in-a-hole.firebaseapp.com",
  projectId: "fire-in-a-hole",
  storageBucket: "fire-in-a-hole.appspot.com",
  messagingSenderId: "516389350591",
  appId: "1:516389350591:web:d7e0be56cd9c8e94f8aa0a"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
