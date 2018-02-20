import { startLoader, stoptLoader } from './loader_action'

export function fetchedReviews(reviews) {
	return { type:"FETCHING_REVIEWS_SUCCESS", data: reviews}
}

export function fetchReviews(locationId) {
	return (dispatch) => {
		dispatch(startLoader())
		return fetch(`https://front-end-interview.herokuapp.com/candidate/3499c25fbc9df05d9efd46388079f562f24d0f54/locations/`+locationId+`/reviews.json`,{
			method:"GET",
		})
		.then(response => response.json())
		.then((json) => {
			console.log("######")
			console.log(json)
			// const address = json.address.map((item,index) => ({...item, primary:index }) )
			dispatch(fetchedReviews(json))
			dispatch(stoptLoader())
		})
	}
}

export function setBaseFilter(filter) {
	return { type:"SET_BASE_FILTER", filter}
}