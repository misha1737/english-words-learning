import { takeEvery, takeLatest } from "redux-saga/effects";
import { workerTopic } from "./actions";
export default [takeLatest("Topic/getTopic", workerTopic)];
