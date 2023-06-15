import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMl-Z7nSHW3oclVK7iuMsAf_PpnclRJn8",
  authDomain: "images-39219.firebaseapp.com",
  projectId: "images-39219",
  storageBucket: "images-39219.appspot.com",
  messagingSenderId: "752752918726",
  appId: "1:752752918726:web:70399f9c16a4136b3297c7",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
