const initState = {
  movieDetails: {},
  isLoading: true,
};

export const movieDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        movieDetails: action.payload.movieDetails.data,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return {
        ...state,
      };
  }
};
