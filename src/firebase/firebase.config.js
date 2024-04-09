// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn6_anT58R3lL4JEgQn7CvQ2hqcTNv-aw",
  authDomain: "cozyhomio.firebaseapp.com",
  projectId: "cozyhomio",
  storageBucket: "cozyhomio.appspot.com",
  messagingSenderId: "671716349193",
  appId: "1:671716349193:web:ea8d93acdc0a8837c86fd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
