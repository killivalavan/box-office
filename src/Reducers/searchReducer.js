const initState = {
  searched: [],
  popular: [],
  cartoon: [],
  cartoon2: [],
  kissingBooth: [],
  harryPotter: [],
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched.data.Search,
      };
    case "POPULAR":
      return {
        ...state,
        popular: action.payload.popular.data.Search,
        cartoon: action.payload.cartoon.data.Search,
        cartoon2: action.payload.cartoon2.data.Search,
        kissingBooth: action.payload.netflix.data.Search,
        harryPotter: action.payload.fantasy.data.Search,
      };

    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default searchReducer;
