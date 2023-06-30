import firebase from 'firebase';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAcX6JgaYpIYdJYakfUEPJ89bZ8Wphhfd8",
  authDomain: "pcos-predictor.firebaseapp.com",
  projectId: "pcos-predictor",
  storageBucket: "pcos-predictor.appspot.com",
  messagingSenderId: "778084202671",
  appId: "1:778084202671:web:06d8b278df757128aefc5a",
  measurementId: "G-GZE9CPY1E3"
};
// const firebase = firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);

export default app;
