import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAP7ebbzN-IR7FFCzIBhdhUw4LOrOXC4Ms",
  authDomain: "react-crud-82284.firebaseapp.com",
  projectId: "react-crud-82284",
  storageBucket: "react-crud-82284.appspot.com",
  messagingSenderId: "172526728531",
  appId: "1:172526728531:web:6a0a1c7285377e4b265da6",
  measurementId: "G-YESVHJJGJT",
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);