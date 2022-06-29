import { takeEvery, put, call, fork, spawn, select } from "redux-saga/effects";
import rsf, { auth } from "./../../rsf";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loading, setError } from "./reducer";
export function* workerLogin(): Generator<any> {
  //console.log(rsf.auth);
  const state: any = yield select();
  const email = state.auth.email;
  const password = state.auth.password;
  try {
    yield signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    yield put(setError("Incorrect username or password."));
  }
  yield put(loading(false));
}
