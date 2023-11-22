// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "@firebase/firestore";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqMY0JGsxwk7s9n-eZ3SUZdYBRFTc1LG0",
  authDomain: "test-base-ff890.firebaseapp.com",
  projectId: "test-base-ff890",
  storageBucket: "test-base-ff890.appspot.com",
  messagingSenderId: "1079869688607",
  appId: "1:1079869688607:web:1813b7583765d52f02fe2a",
  measurementId: "G-L8XMWK149F"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);