import { put } from "redux-saga/effects";
//import { collection, getDocs, doc, setDoc } from "firebase/firestore";
//import { auth, db } from "./../../firebase";
import {
  loading,
  setError,
  setBlocks,
  Blocks,
  toOpenTopicModal,
  getCatalog,
} from "./reducer";
export function* workerCatalog(): Generator<any> {
  try {
    // const colRef = collection(db, "blocks");
    // const snapshots: any = yield getDocs(colRef);
    // const docs = snapshots.docs.map((doc: any) => {
    //   const data = doc.data();
    //   data.id = doc.id;
    //   return data;
    // });
    // yield put(setBlocks(docs));
  } catch (err) {
    yield put(setError("Error loading catalog"));
  }
  yield put(loading(false));
}
export function* workerNewTopic(action: {
  type: string;
  payload: { name: string };
}): Generator<any> {
  try {
    // const citiesRef = collection(db, "blocks");
    // yield setDoc(doc(citiesRef, "SF"), {
    //   name: action.payload.name,
    //   count: 0,
    // });
    // yield put(toOpenTopicModal(false));
    // yield put(getCatalog());
  } catch (err) {
    yield put(setError("Error loading topic"));
  }
  yield put(toOpenTopicModal(false));
  yield put(loading(false));
}
