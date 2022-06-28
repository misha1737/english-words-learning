import { initializeApp } from "firebase/app";
import "@firebase/firestore"; // 👈 If you're using firestore
import ReduxSagaFirebase from "redux-saga-firebase";
import { getAuth } from "firebase/auth";
const myFirebaseApp = initializeApp({
  apiKey: "AIzaSyBQYp2Mbj4_H801TL0CUdVJZbTimnMZC3c",
  authDomain: "english-88fd9.firebaseapp.com",
  databaseURL:
    "https://english-88fd9-default-rtdb.europe-west1.firebasedatabase.app",
});

const rsf = new ReduxSagaFirebase(myFirebaseApp);
export const auth = getAuth();
export default rsf;
