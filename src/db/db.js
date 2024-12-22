import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaVQrvALOnKk7IaFq_Ro5uu4GxxS7-B-o",
  authDomain: "ecommers-coder-aaa33.firebaseapp.com",
  projectId: "ecommers-coder-aaa33",
  storageBucket: "ecommers-coder-aaa33.firebasestorage.app",
  messagingSenderId: "133467989513",
  appId: "1:133467989513:web:7bda10c732ab72da5c7ad8"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export default db