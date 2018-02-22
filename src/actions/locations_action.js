import { startLoader, stoptLoader } from './loader_action'

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
