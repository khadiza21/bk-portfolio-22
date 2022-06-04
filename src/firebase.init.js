// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1djnelmb16Fy7PGqF5TxagdUm9CcQHDA",
  authDomain: "bk-portfolio-58758.firebaseapp.com",
  projectId: "bk-portfolio-58758",
  storageBucket: "bk-portfolio-58758.appspot.com",
  messagingSenderId: "123424531065",
  appId: "1:123424531065:web:87d7ece77b8ea956982aa8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
