//import firebase from "firebase/app";
import { takeEvery, put, call, fork, spawn, select } from "redux-saga/effects";
import firebase, { database } from "../../firebase";
import { get, child } from "firebase/database";

import { loading, setError, setBlocks, Blocks } from "./reducer";
export function* workerCatalog(): Generator<any> {
  const state: any = yield select();
  try {
    const snapshot: any = yield get(child(database, `blocks`));
    if (snapshot.exists()) {
      const result = snapshot.val();
      const blocks: Blocks[] = [];
      Object.keys(result).forEach((key) => {
        const block = {
          id: key,
          name: result[key].name,
          count: 0,
        };
        if (result[key].words) {
          block.count = Object.keys(result[key].words).length;
        }
        blocks.push(block);
      });
      yield put(setBlocks(blocks));
    } else {
      console.log("No data available");
    }
  } catch (err) {
    yield put(setError("Error loading catalog"));
    console.log(err, "---");
  }
  yield put(loading(false));
  console.log("&&&&");
}
