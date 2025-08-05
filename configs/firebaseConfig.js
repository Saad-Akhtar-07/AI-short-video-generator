// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-video-gen-84750.firebaseapp.com",
  projectId: "ai-video-gen-84750",
  storageBucket: "ai-video-gen-84750.firebasestorage.app",
  messagingSenderId: "214461901134",
  appId: "1:214461901134:web:d54ad626619b8f1859d61f",
  measurementId: "G-RN2FMHENWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);