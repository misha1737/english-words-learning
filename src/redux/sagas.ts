import { all } from "redux-saga/effects";
import watchCatalog from "./modules/catalog/watcher";
import watchTopic from "./modules/topic/watcher";
import watchLogin from "./modules/auth/watcher";

export default function* rootSaga() {
  yield all([...watchLogin, ...watchCatalog, ...watchTopic]);
}
