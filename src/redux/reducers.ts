import auth, { AuthData } from "./modules/auth/reducer";
import catalog, { Catalog } from "./modules/catalog/reducer";
import topic, { Topic } from "./modules/topic/reducer";
import user, { UserType } from "./modules/user/reducer";
import { combineReducers } from "redux";
import { createRouterReducer } from "@lagunovsky/redux-react-router";

export interface State {
  catalog: Catalog;
  auth: AuthData;
  user: UserType;
  topic: Topic;
}
export const reducers = combineReducers({
  auth,
  catalog,
  user,
  topic,
});
