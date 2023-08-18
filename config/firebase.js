// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRckK7tFLFVsIUx_LkCMDl6w8GOaELzxA",
  authDomain: "react-native-login-bbcfb.firebaseapp.com",
  projectId: "react-native-login-bbcfb",
  storageBucket: "react-native-login-bbcfb.appspot.com",
  messagingSenderId: "1096496518765",
  appId: "1:1096496518765:web:2a76a295089445a425d164",
  measurementId: "G-9DRJ7ZV067"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);