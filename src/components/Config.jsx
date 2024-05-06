// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsdIzsxCh5PAq54dE7v9cfeVO8IjODa6U",
  authDomain: "fir-auth-113-af7c3.firebaseapp.com",
  databaseURL: "https://fir-auth-113-af7c3-default-rtdb.firebaseio.com",
  projectId: "fir-auth-113-af7c3",
  storageBucket: "fir-auth-113-af7c3.appspot.com",
  messagingSenderId: "468672224201",
  appId: "1:468672224201:web:683a2333eb8952579de618",
  measurementId: "G-BLFS6KPLCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db =getFirestore(app)