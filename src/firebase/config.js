// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAz6K_aLHgYddRMRCvTxtC1iJZuktfIUjE",
    authDomain: "form-rose.firebaseapp.com",
    projectId: "form-rose",
    storageBucket: "form-rose.appspot.com",
    messagingSenderId: "99883815975",
    appId: "1:99883815975:web:02979f2c919d6cd0dcea02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app