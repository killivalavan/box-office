import axios from "axios";
import { movieDetails } from "../api";

export const fetchDetail = (id) => async (dispatch) => {
  const getMovie = await axios.get(movieDetails(id));
  console.log(getMovie);
  dispatch({
    type: "GET_DETAIL",
    payload: {
      movieDetails: getMovie,
    },
  });
};
