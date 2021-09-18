const initState = {
  movieDetails: {},
};

export const movieDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        movieDetails: action.payload.movieDetails.data,
      };

    default:
      return {
        ...state,
      };
  }
};
