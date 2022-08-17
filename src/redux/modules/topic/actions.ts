import { put, select } from "redux-saga/effects";
import { getAPI, postAPI } from "./../../../utils/fetchData";
import {
  loading,
  setError,
  setWords,
  getTopic,
  toOpenWordModal,
} from "./reducer";
export function* workerTopic(action: {
  type: string;
  payload: string;
}): Generator<any> {
  try {
    const state: any = yield select();
    const token = state.user.userData.token;
    const topicId: string = action.payload;
    const response: any = yield getAPI(`word?id=${topicId}`, token);
    if (response.status == 404) {
      console.error(response.data);
      return;
    }
    yield put(setWords(response.data));
  } catch (err: any) {
    yield put(setError("Error loading words"));
  }
  yield put(loading(false));
}
export function* workerAddWord(action: {
  type: string;
  payload: {
    word: string;
    translate: string;
    topicId: string;
  };
}): Generator<any> {
  try {
    const state: any = yield select();
    const token = state.user.userData.token;
    const newWord = action.payload;
    const response: any = yield postAPI(
      "word",
      {
        word: newWord.word,
        translate: newWord.translate,
        topicID: newWord.topicId,
      },
      token
    );
    yield put(toOpenWordModal(false));
    yield put(getTopic(newWord.topicId));
  } catch (err) {
    console.error(err);
    yield put(setError("Error loading topic"));
  }
  yield put(loading(false));
}
