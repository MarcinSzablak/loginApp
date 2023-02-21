// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ-_sDm7dulbZ4Bq7N3RkKEt4JtVG6Sls",
  authDomain: "loginapp-53ba1.firebaseapp.com",
  databaseURL: "https://loginapp-53ba1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "loginapp-53ba1",
  storageBucket: "loginapp-53ba1.appspot.com",
  messagingSenderId: "143992987787",
  appId: "1:143992987787:web:42929c2d6dcada1064f48e",
  measurementId: "G-5XL2WCEP1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);