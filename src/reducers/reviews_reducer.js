const initialState={
  error: null,
  data: {},
  filters: {
    'base': 'Total Interaction',
    'platform': 'all',
    'date': 'month'
  }
}
export default function reviews(state = initialState, action){
  switch (action.type) {
    case "FETCHING_REVIEWS_SUCCESS":
    	return {...state, error: null, data: action.data.reviews };
    case "FETCHING_REVIEWS_FAILURE":
      return { ...state, error: "something went wrong" };
    case "SET_BASE_FILTER":
      let filters = state.filters
      filters['base'] = action.filter
      return { ...state, filters}
    default:
      return state;
  }
}
