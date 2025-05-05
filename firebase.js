// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCszkiNfzMfVnTVAw2_7yovIO59HzG_4VU",
  authDomain: "rentchain-966fc.firebaseapp.com",
  projectId: "rentchain-966fc",
  storageBucket: "rentchain-966fc.firebasestorage.app",
  messagingSenderId: "535731112337",
  appId: "1:535731112337:web:0f216190b4bc6c79adf230",
  measurementId: "G-V68JX7DP96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
