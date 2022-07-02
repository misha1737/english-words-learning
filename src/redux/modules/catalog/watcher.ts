import { takeEvery, takeLatest } from "redux-saga/effects";
import { workerCatalog } from "./actions";
export default [takeLatest("Catalog/getCatalog", workerCatalog)];
