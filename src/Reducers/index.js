import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import { movieDetailReducer } from "./movieDetailReducer";

const allReducers = combineReducers({
  Movie: searchReducer,
  MovieDetail: movieDetailReducer,
});

export default allReducers;
