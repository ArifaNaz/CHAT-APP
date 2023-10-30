import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyDi38tjbsRN-YeGzUefWr9_qZEqzfHRR2E",
      authDomain: "react-chat-be8bb.firebaseapp.com",
      projectId: "react-chat-be8bb",
      storageBucket: "react-chat-be8bb.appspot.com",
      messagingSenderId: "1099068224716",
      appId: "1:1099068224716:web:80f131f610de425a4ffe69",
      measurementId: "G-2NYKP4R9NW"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);