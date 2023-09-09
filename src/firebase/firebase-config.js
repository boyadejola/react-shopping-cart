// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyCxRCIDUamn5jE-68A4xQAh9ueMbsV3cR4",
  authDomain: "clubbers-store-backend.firebaseapp.com",
  projectId: "clubbers-store-backend",
  storageBucket: "clubbers-store-backend.appspot.com",
  messagingSenderId: "444669765987",
  appId: "1:444669765987:web:38fa4872655ffb98914b56",
  measurementId: "G-37SS5K06H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  export  { firebaseConfig, app ,analytics }