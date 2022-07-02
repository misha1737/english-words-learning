import { initializeApp } from "firebase/app";
import "@firebase/firestore"; // 👈 If you're using firestore
import { getDatabase, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebase = initializeApp({
  apiKey: "AIzaSyBQYp2Mbj4_H801TL0CUdVJZbTimnMZC3c",
  authDomain: "english-88fd9.firebaseapp.com",
  databaseURL:
    "https://english-88fd9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "english-88fd9",
  storageBucket: "english-88fd9.appspot.com",
  messagingSenderId: "398818599478",
  appId: "1:398818599478:web:8d692b9c65089130846e97",
});
export const auth = getAuth();
export const database = ref(getDatabase());

//const database = rsf.database();
export default firebase;
