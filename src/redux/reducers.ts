import auth, { UserData } from "./modules/auth/reducer";
// import lists, {List} from './list.js';
import { combineReducers } from "redux";

export interface State {
  // lists:  List[],
  auth: UserData;
}
export const reducers = combineReducers({
  auth,
  //   lists,
});
