import { put } from "redux-saga/effects";
//import { collection, getDocs } from "firebase/firestore";
// import { auth, db } from "./../../firebase";
import { loading, setError, setWords, Words } from "./reducer";
export function* workerTopic(action: {
  type: string;
  payload: string;
}): Generator<any> {
  try {
    // const colRef = collection(db, "blocks", action.payload, "words");
    //const snapshots: any = yield getDocs(colRef);
    // const docs = snapshots.docs.map((doc: any) => {
    //   const data = doc.data();
    //   data.id = doc.id;
    //   return data;
    // });
    // yield put(setWords(docs));
  } catch (err) {
    yield put(setError("Error loading topic"));
  }
  yield put(loading(false));
}
export function* workerAddWord(action: {
  type: string;
  payload: { word: string; translate: string };
}): Generator<any> {
  try {
    // const colRef = collection(db, "blocks", action.payload, "words");
    // const snapshots: any = yield getDocs(colRef);
    // const docs = snapshots.docs.map((doc: any) => {
    //   const data = doc.data();
    //   data.id = doc.id;
    //   return data;
    // });
    //yield put(setWords(docs));

    console.log("5555", action.payload);
  } catch (err) {
    console.error(err);
    yield put(setError("Error loading topic"));
  }
  yield put(loading(false));
}
