import { takeEvery, put, call, fork, spawn, select } from "redux-saga/effects";
import rsf, { auth } from "./../../rsf";
import { signInWithEmailAndPassword } from "firebase/auth";
import { State } from "./../../reducers";
export function* workerLogin(): Generator<any> {
  //console.log(rsf.auth);
  const state: any = yield select();
  const email = state.auth.email;
  const password = state.auth.password;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("....", state);
    })
    .catch((error) => {
      console.log("....", state, error);
    });

  //const res = yield call(rsf.auth.signInWithEmailAndPassword, email, password);
  // yield put(setPlanets(planets));
}
