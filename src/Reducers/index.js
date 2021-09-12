import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const allReducers = combineReducers({
  Movie: searchReducer,
});

export default allReducers;
