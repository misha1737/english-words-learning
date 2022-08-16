import { takeEvery, takeLatest } from "redux-saga/effects";
import { workerLogin, workerRegistration } from "./actions";
export default [
  takeLatest("Auth/login", workerLogin),
  takeEvery("Auth/registration", workerRegistration),
];
