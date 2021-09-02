// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGSkSEUu6DNfQhV91o2DtqskqlwmdoUVM",
  authDomain: "portfolio-aec40.firebaseapp.com",
  projectId: "portfolio-aec40",
  storageBucket: "portfolio-aec40.appspot.com",
  messagingSenderId: "757669421797",
  appId: "1:757669421797:web:d6d35bdddbc1586d19aa0c",
  measurementId: "G-LWJYJZNLTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);