import { startLoader, stoptLoader } from './loader_action'

export const FETCHING_LOCATION ="FETCHING_LOCATION"
export const FETCHING_LOCATION_SUCCESS = "FETCHING_LOCATION_SUCCESS"
export const FETCHING_LOCATION_FAILURE = "FETCHING_LOCATION_FAILURE"

export function fetchedLocation(address) {
	return { type:"FETCHING_LOCATION_SUCCESS", data: address}
}

export function fetchLocation() {
	return (dispatch) => {
		dispatch(startLoader())
		return fetch(`https://front-end-interview.herokuapp.com/candidate/3499c25fbc9df05d9efd46388079f562f24d0f54/locations.json`,{
			method:"GET",
		})
		.then(response => response.json())
		.then((json) => {
			console.log("######")
			console.log(json)
			// const address = json.address.map((item,index) => ({...item, primary:index }) )
			dispatch(fetchedLocation(json))
			dispatch(stoptLoader())
		})
	}
}

export function setLocation(locationId) {
	return (dispatch) => { 
		dispatch({type:"SET_LOCATION", id: locationId })
	}
}

 // https://front-end-interview.herokuapp.com/candidate/3499c25fbc9df05d9efd46388079f562f24d0f54/locations/a0f9ff49-fe95-4681-bf4b-904c684b575a/reviews.json