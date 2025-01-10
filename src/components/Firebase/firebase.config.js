
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId,
  apiKey: "AIzaSyBl_ZaVGapN4cLFtmLp14bY5UyJlih4Bt4",
  authDomain: "pachpahar-ba4c8.firebaseapp.com",
  projectId: "pachpahar-ba4c8",
  storageBucket: "pachpahar-ba4c8.firebasestorage.app",
  messagingSenderId: "276805977240",
  appId: "1:276805977240:web:86b9428367159f6ea6fced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;
