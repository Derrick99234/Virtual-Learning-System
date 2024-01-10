import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_snd3uiA6d9xOquHRrY-Yb8vVvRLSHAM",
  authDomain: "virtual-learning-system.firebaseapp.com",
  projectId: "virtual-learning-system",
  storageBucket: "virtual-learning-system.appspot.com",
  messagingSenderId: "851434524200",
  appId: "1:851434524200:web:d18fce6e7d5fd1a4b62f1d",
  measurementId: "G-0CKQJ5YL0G",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const storage = getStorage(app)
