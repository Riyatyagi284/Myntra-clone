import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCERmgOusXw9LzDEs28woKc5OVMgQFfzCU",
    authDomain: "myntra-clone-4b866.firebaseapp.com",
    projectId: "myntra-clone-4b866",
    storageBucket: "myntra-clone-4b866.appspot.com",
    messagingSenderId: "465550028790",
    appId: "1:465550028790:web:e30839c100253e9cd261d7"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export {
    createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut
}