import { put, select } from "redux-saga/effects";
import { getAPI, postAPI } from "./../../../utils/fetchData";
import {
  loading,
  setError,
  setBlocks,
  Blocks,
  toOpenTopicModal,
  getCatalog,
} from "./reducer";

export function* workerCatalog(): Generator<any> {
  try {
    const state: any = yield select();
    const token = state.user.userData.token;
    const response: any = yield getAPI("topic", token);
    yield put(setBlocks(response.data));
  } catch (err: any) {
    yield put(setError("Error loading catalog"));
  }
  yield put(loading(false));
}
export function* workerNewTopic(action: {
  type: string;
  payload: { name: string };
}): Generator<any> {
  try {
    const state: any = yield select();
    const token = state.user.userData.token;
    const name: string = action.payload.name;
    const response: any = yield postAPI(
      "topic",
      {
        name,
      },
      token
    );
    yield put(toOpenTopicModal(false));
    yield put(getCatalog());
  } catch (err) {
    yield put(setError("Error loading topic"));
  }
  yield put(toOpenTopicModal(false));
  yield put(loading(false));
}
