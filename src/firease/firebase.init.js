// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Q9yDf_reiRHwgBMD0NAh67z7MBZhj8A",
  authDomain: "practice-firebase-97e69.firebaseapp.com",
  projectId: "practice-firebase-97e69",
  storageBucket: "practice-firebase-97e69.firebasestorage.app",
  messagingSenderId: "497088141502",
  appId: "1:497088141502:web:a6397f1c040f2ebd22e6ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;