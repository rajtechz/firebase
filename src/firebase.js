import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAkQaxdhvzio2P6kIYCueGgzx-59v07yeM",
  authDomain: "react-firebase-b9328.firebaseapp.com",
  projectId: "react-firebase-b9328",
  storageBucket: "react-firebase-b9328.appspot.com",
  messagingSenderId: "1074155913387",
  appId: "1:1074155913387:web:0f3f17f55b6963e1ee77ee",
  measurementId: "G-Z12G186RG1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
