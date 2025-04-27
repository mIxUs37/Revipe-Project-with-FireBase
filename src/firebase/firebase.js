// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Новый импорт!

const firebaseConfig = {
  apiKey: "AIzaSyDQtqLOE671xS59f81Drf1d30vcoQRPv_s",
  authDomain: "recipestore-bbed5.firebaseapp.com",
  projectId: "recipestore-bbed5",
  storageBucket: "recipestore-bbed5.firebasestorage.app",
  messagingSenderId: "427900354512",
  appId: "1:427900354512:web:b5f239357e80a2c26dc3d5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // Экспорт Firestore
