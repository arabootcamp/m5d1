// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH8RIJpPr0uoHRIH7E11GDqJkORhAKq9A",
  authDomain: "desafio01-c9831.firebaseapp.com",
  projectId: "desafio01-c9831",
  storageBucket: "desafio01-c9831.appspot.com",
  messagingSenderId: "163530025536",
  appId: "1:163530025536:web:4d64cebb24bbaf67398da5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;