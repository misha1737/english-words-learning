import auth, { UserData } from "./modules/auth/reducer";
import catalog, { Catalog } from "./modules/catalog/reducer";
import { combineReducers } from "redux";

export interface State {
  catalog: Catalog;
  auth: UserData;
}
export const reducers = combineReducers({
  auth,
  catalog,
});
