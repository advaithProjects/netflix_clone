// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvX5ddf6nO6SCw9OgsFLgXG9zYNtBXWtA",
  authDomain: "netflix-clone-4adb8.firebaseapp.com",
  databaseURL:
    "https://netflix-clone-4adb8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-clone-4adb8",
  storageBucket: "netflix-clone-4adb8.firebasestorage.app",
  messagingSenderId: "863100880117",
  appId: "1:863100880117:web:2aa3bfa537b0e7dc5871bc",
  measurementId: "G-TRHZ2P703R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
// User SignUp function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code)
  }
};
// User SignIn function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code)
  }
};
// User LogOut function
const logout = () => {
  signOut(auth);
};
export { auth, db, login, signup, logout };
