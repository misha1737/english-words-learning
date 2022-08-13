import { takeEvery, takeLatest } from "redux-saga/effects";
import { workerCatalog, workerNewTopic } from "./actions";
export default [
  takeLatest("Catalog/getCatalog", workerCatalog),
  takeEvery("Catalog/addNewTopic", workerNewTopic),
];
