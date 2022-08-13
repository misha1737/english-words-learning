import { takeEvery, takeLatest } from "redux-saga/effects";
import { workerTopic, workerAddWord } from "./actions";
export default [
  takeLatest("Topic/getTopic", workerTopic),
  takeLatest("Topic/addNewWord", workerAddWord),
];
