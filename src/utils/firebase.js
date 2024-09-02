// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmbhHghi0kOtpa4vRmXkiCoX_IW6P3ZgQ",
  authDomain: "netflix-ff203.firebaseapp.com",
  projectId: "netflix-ff203",
  storageBucket: "netflix-ff203.appspot.com",
  messagingSenderId: "604002325797",
  appId: "1:604002325797:web:9aea4e3ff29ff49304b6cc",
  measurementId: "G-3PQHE2KYBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);