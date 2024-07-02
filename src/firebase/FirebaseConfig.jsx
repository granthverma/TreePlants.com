// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,setPersistence, browserSessionPersistence } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAopfrQmOaiS1qbiQLweGIqolD2WO9M9aA",
  authDomain: "ecomapple-f3f69.firebaseapp.com",
  projectId: "ecomapple-f3f69",
  storageBucket: "ecomapple-f3f69.appspot.com",
  messagingSenderId: "1097286385632",
  appId: "1:1097286385632:web:6fb327b14b2bc7ee6af585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB =getFirestore(app);
const auth = getAuth (app) ;


setPersistence(auth, browserSessionPersistence)
    .then(() => {
        // Existing and future Auth states are now persisted in the session only
        console.log("Persistence set to session only");
    })
    .catch((error) => {
        console.error("Error setting persistence:", error);
    });
export {fireDB , auth};