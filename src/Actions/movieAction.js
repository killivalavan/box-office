import axios from "axios";
import { movieDetails } from "../api";

export const fetchDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  const getMovie = await axios.get(movieDetails(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      movieDetails: getMovie,
    },
  });
};
