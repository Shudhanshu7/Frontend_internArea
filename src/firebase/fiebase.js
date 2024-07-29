// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_FS76yEVAewAoo61NUGbsPAN_BhT7XyU",
  authDomain: "internarea-83205.firebaseapp.com",
  projectId: "internarea-83205",
  storageBucket: "internarea-83205.appspot.com",
  messagingSenderId: "587225607574",
  appId: "1:587225607574:web:2158fa48beef21bddf81b7",
  measurementId: "G-K9CPEPGHK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider = new GoogleAuthProvider();
export{auth,provider}