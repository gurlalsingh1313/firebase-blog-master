// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4Cr7MA9tFplH767k-OVzZz5MeaNlwJbM",
  authDomain: "blog-page-c481c.firebaseapp.com",
  projectId: "blog-page-c481c",
  storageBucket: "blog-page-c481c.appspot.com",
  messagingSenderId: "664416725789",
  appId: "1:664416725789:web:f72d583109f3b238674ff4",
  measurementId: "G-ZHQMJF7H7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage,analytics};