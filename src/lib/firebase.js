// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-443c6.firebaseapp.com",
  projectId: "reactchat-443c6",
  storageBucket: "reactchat-443c6.appspot.com",
  messagingSenderId: "1032366906911",
  appId: "1:1032366906911:web:89e5b89bf744184978ff2a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()