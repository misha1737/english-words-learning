import auth, { UserData } from "./modules/auth/reducer";
import catalog, { Catalog } from "./modules/catalog/reducer";
import { combineReducers } from "redux";
import { createRouterReducer } from "@lagunovsky/redux-react-router";
import { browserHistory } from "./history";

export interface State {
  catalog: Catalog;
  auth: UserData;
}
export const reducers = combineReducers({
  router: createRouterReducer(browserHistory),
  auth,
  catalog,
});
