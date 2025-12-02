import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGQiLrzEYgk1gy5__N4vpyhRa7ssy0DT0",
  authDomain: "carparito-f4409.firebaseapp.com",
  projectId: "carparito-f4409",
  storageBucket: "carparito-f4409.firebasestorage.app",
  messagingSenderId: "250987929872",
  appId: "1:250987929872:web:5785477f946c501f758595",
  measurementId: "G-E6DK26P442"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
