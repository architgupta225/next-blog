// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-d3b24.firebaseapp.com",
  projectId: "blog-d3b24",
  storageBucket: "blog-d3b24.appspot.com",
  messagingSenderId: "63741824731",
  appId: "1:63741824731:web:f8215ed13c25d6285ec6fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);