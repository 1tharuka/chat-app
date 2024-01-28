import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZnRKydqTow481eW6YBxNv4kToa7oBPco",
    authDomain: "me-chat-ac9d9.firebaseapp.com",
    projectId: "me-chat-ac9d9",
    storageBucket: "me-chat-ac9d9.appspot.com",
    messagingSenderId: "977859430253",
    appId: "1:977859430253:web:8f7701d5c409c9716e7c64",
    measurementId: "G-RY3TZLB5GN"
})


const db = firebaseApp.firestore();
export default db;