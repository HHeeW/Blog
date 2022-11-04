import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID
  apiKey: "AIzaSyBxTPPZCo20Zraw3dK1K-wPGn394tmnnsw",
  authDomain: "hheewon-9590f.firebaseapp.com",
  projectId: "hheewon-9590f",
  storageBucket: "hheewon-9590f.appspot.com",
  messagingSenderId: "42258298290",
  appId: "1:42258298290:web:89683131989410933ce0ab"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore();