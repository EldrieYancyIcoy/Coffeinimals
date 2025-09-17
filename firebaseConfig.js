import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDCkM8TqPudpgB1AwV5FtUFJdVS10e-u14",
  authDomain: "coffeinimals.firebaseapp.com",
  projectId: "coffeinimals",
  storageBucket: "coffeinimals.firebasestorage.app",
  messagingSenderId: "564570942836",
  appId: "1:564570942836:web:aebcd885925815ce971021",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)