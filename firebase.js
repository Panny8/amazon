// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRSxCepZsbzICZOtX0X7-V67o7p2Rw44E",
  authDomain: "panny-33070.firebaseapp.com",
  projectId: "panny-33070",
  storageBucket: "panny-33070.appspot.com",
  messagingSenderId: "895915555579",
  appId: "1:895915555579:web:33a8297c69256da43c0e5e",
  measurementId: "G-GMRVM3Z2G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);