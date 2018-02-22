
const initialState={
  error: null,
  data: {},
  filters: {
    'base': 'Total Interaction',
    'platform': 'All platforms',
    'date': 'all'
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
    case "SET_PLATFORM_FILTER":
      let platform_filter = state.filters
      platform_filter['platform'] = action.filter
      return { ...state, filters: platform_filter}
    case "SET_DATE_FILTER":
      let date_filter = state.filters
      date_filter['date'] = action.filter
      return { ...state, filters: date_filter}
    case "ADD_FEEDBACK":
      let data = state.data
      let platform_reviews = data[action.platform]
      platform_reviews = platform_reviews.map((review) => {
        if(review.id === action.reviewId) {
            review.responses.push({'content': action.content})
        }
        return review
      })
      data[action.platform] = platform_reviews
      return { ...state, data : data}
    default:
      return state;
  }
}
