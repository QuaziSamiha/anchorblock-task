import { combineReducers } from "redux";
import authSlice from "../auth/authSlice";

export const rootReduce = combineReducers({
  user: authSlice.reducer
});
