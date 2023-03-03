// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYY-oRy4p1E0DLCRyaGIupO8h15dNEOCE",
  authDomain: "house-marketplace-app-eeccc.firebaseapp.com",
  projectId: "house-marketplace-app-eeccc",
  storageBucket: "house-marketplace-app-eeccc.appspot.com",
  messagingSenderId: "386879698591",
  appId: "1:386879698591:web:254a311d0ea755b5bd54aa"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//export const db = getFirestore

const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);