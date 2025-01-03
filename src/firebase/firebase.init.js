// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0rTcGSswr3R4YH56DoUX3TARIa9iQ-EE",
  authDomain: "crowd-funding-d936a.firebaseapp.com",
  projectId: "crowd-funding-d936a",
  storageBucket: "crowd-funding-d936a.firebasestorage.app",
  messagingSenderId: "610975470433",
  appId: "1:610975470433:web:20dda8fa7a0728b33ceb20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);