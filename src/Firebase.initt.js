// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ8B9xbeiuNvIooJkuw_44Ep8K8o_X6GE",
  authDomain: "good-foods-a594c.firebaseapp.com",
  projectId: "good-foods-a594c",
  storageBucket: "good-foods-a594c.appspot.com",
  messagingSenderId: "98059681592",
  appId: "1:98059681592:web:b737ee8b99e78a93b0cbcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
