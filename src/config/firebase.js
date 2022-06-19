import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAG1aJwsywntFr7JJGdr9Foq_m_PXWGG7Q",
    authDomain: "xoros-5f937.firebaseapp.com",
    projectId: "xoros-5f937",
    storageBucket: "xoros-5f937.appspot.com",
    messagingSenderId: "291404333727",
    appId: "1:291404333727:web:f662d73f3a40958ca318aa"
};

initializeApp(firebaseConfig)
export const db = getFirestore()