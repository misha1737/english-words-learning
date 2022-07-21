import { put } from "redux-saga/effects";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./../../firebase";
import { loading, setError, setBlocks, Blocks } from "./reducer";
export function* workerCatalog(): Generator<any> {
  try {
    const colRef = collection(db, "blocks");
    const snapshots: any = yield getDocs(colRef);
    const docs = snapshots.docs.map((doc: any) => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    });
    yield put(setBlocks(docs));
  } catch (err) {
    yield put(setError("Error loading catalog"));
  }
  yield put(loading(false));
}
