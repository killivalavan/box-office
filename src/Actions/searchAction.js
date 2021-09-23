import axios from "axios";
import {
  movieSearchURL,
  popularMovieURL,
  cartoonsURL,
  cartoons2URL,
  netflixURL,
  fantasyURL,
} from "../api";

export const fetchSearch = (search) => async (dispatch) => {
  const searchMovie = await axios.get(movieSearchURL(search));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchMovie,
    },
  });
};

export const fetchRecent = () => async (dispatch) => {
  const popularMovie = await axios.get(popularMovieURL());
  const cartoonData = await axios.get(cartoonsURL());
  const cartoonData2 = await axios.get(cartoons2URL());
  const kissingBooth = await axios.get(netflixURL());
  const harryPotter = await axios.get(fantasyURL());

  dispatch({
    type: "POPULAR",
    payload: {
      popular: popularMovie,
      cartoon: cartoonData,
      cartoon2: cartoonData2,
      netflix: kissingBooth,
      fantasy: harryPotter,
    },
  });
};
