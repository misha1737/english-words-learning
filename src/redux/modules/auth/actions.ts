import { takeEvery, put, call, fork, spawn, select } from "redux-saga/effects";
import { loading, setError } from "./reducer";
import { setUserData } from "./../user/reducer";
import { postAPI } from "./../../../utils/fetchData";
export function* workerLogin(): Generator<any> {
  const state: any = yield select();
  const email = state.auth.email;
  const password = state.auth.password;

  const response: any = yield postAPI("auth", {
    login: email,
    password: password,
  });
  if (response && response.statusText === "OK") {
    yield put(setUserData(response.data));
  } else {
    yield put(setError("Incorrect username or password."));
  }
  yield put(loading(false));
}
export function* workerRegistration(): Generator<any> {
  const state: any = yield select();
  const email = state.auth.email;
  const password = state.auth.password;
  const response: any = yield postAPI("registration", {
    login: email,
    password: password,
  });
  if (response && response.statusText === "OK") {
    yield put(setUserData(response.data));
  } else {
    yield put(setError(response.data));
  }
  yield put(loading(false));
}
