// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD95zuXHMPE224wOBKxa2gWTBjp_Rq90b0",
  authDomain: "chatsupport-c7567.firebaseapp.com",
  projectId: "chatsupport-c7567",
  storageBucket: "chatsupport-c7567.appspot.com",
  messagingSenderId: "696336187214",
  appId: "1:696336187214:web:4267d19e012cefb83c281f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
