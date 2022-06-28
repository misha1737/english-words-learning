import { takeEvery, takeLatest } from "redux-saga/effects";
import { workerLogin } from "./actions";
export default [takeLatest("Auth/login", workerLogin)];
