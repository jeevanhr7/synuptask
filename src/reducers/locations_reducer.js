const initialState={
  error: null,
  data: [],
  selectedLocationId: null
}
export default function locations(state = initialState, action){
  switch (action.type) {
    case "FETCHING_LOCATION_SUCCESS":
    	return {...state, error: null, data: action.data.locations };
    case "FETCHING_LOCATION_FAILURE":
      return { ...state, error: "something went wrong" };
    case "SET_LOCATION":
      return { ...state, selectedLocationId: action.id };
    default:
      return state;
  }
}
