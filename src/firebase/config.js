import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8n3NHW2vp2HdkJcd9w_DN9D9anxSytmg",
    authDomain: "textareareact.firebaseapp.com",
    projectId: "textareareact",
    storageBucket: "textareareact.appspot.com",
    messagingSenderId: "667208767119",
    appId: "1:667208767119:web:c32cd5c4df38412a8442fa"
  };

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
