import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH0SLca1llLiZfENX33M_NACgnhwXWqR4",
  authDomain: "insurewise-64ae7.firebaseapp.com",
  projectId: "insurewise-64ae7",
  storageBucket: "insurewise-64ae7.firebasestorage.app",
  messagingSenderId: "317145221529",
  appId: "1:317145221529:web:246c298b979b017fbf2b08",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
