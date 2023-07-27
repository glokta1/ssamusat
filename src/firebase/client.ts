// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJiZxO5Ht3verWC5hBPwnXeLV371VBgcg",
  authDomain: "ssamusat-a8cdf.firebaseapp.com",
  projectId: "ssamusat-a8cdf",
  storageBucket: "ssamusat-a8cdf.appspot.com",
  messagingSenderId: "605400895778",
  appId: "1:605400895778:web:aa02e13850d6adce13d57b",
  measurementId: "G-2LG9B7YQDR"
};

// Initialize Firebase and Firestore
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)