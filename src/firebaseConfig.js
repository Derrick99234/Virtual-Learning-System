import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCWPF61uBj-_R7lAS3oyhp5pB5QiKw5TKw",
  authDomain: "virtual-learning-system-vls.firebaseapp.com",
  projectId: "virtual-learning-system-vls",
  storageBucket: "virtual-learning-system-vls.appspot.com",
  messagingSenderId: "473460896860",
  appId: "1:473460896860:web:e9c3cf6310c219b1c22299"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app)
export const db = getFirestore(app)
