// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUyMRyb23FjrddjdWOAuDOAaRszJMiQbE",
  authDomain: "me-chat-b9f06.firebaseapp.com",
  projectId: "me-chat-b9f06",
  storageBucket: "me-chat-b9f06.appspot.com",
  messagingSenderId: "825659689906",
  appId: "1:825659689906:web:b6393b0ef2449a2e5ab2ab",
  measurementId: "G-9F2JNB9JNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);