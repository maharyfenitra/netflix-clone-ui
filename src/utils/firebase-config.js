// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyA1WGAmNHfA-QJgFndyYhwLxFWEJOadtYg",

  authDomain: "react-netflix-clone-de3fe.firebaseapp.com",

  projectId: "react-netflix-clone-de3fe",

  storageBucket: "react-netflix-clone-de3fe.appspot.com",

  messagingSenderId: "526174810575",

  appId: "1:526174810575:web:c88e61efcc402755c362ba",

  measurementId: "G-VHNZXRPXJQ"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);