import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDQaVM5xjFB-WB4IQXnupSvWOJSQdlrN00",
    authDomain: "bloggin-site-c4727.firebaseapp.com",
    projectId: "bloggin-site-c4727",
    storageBucket: "bloggin-site-c4727.appspot.com",
    messagingSenderId: "170432646256",
    appId: "1:170432646256:web:f36807db85372e1956f8b5"
}
const collectionName = "blogs"
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const blogsCollection = collection(db,collectionName)