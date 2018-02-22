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
			dispatch(fetchedReviews(json))
			dispatch(stoptLoader())
		})
	}
}

export function setBaseFilter(filter) {
	return { type:"SET_BASE_FILTER", filter}
}

export function setplatformfilter(filter) {
	return { type:"SET_PLATFORM_FILTER", filter}
}

export function setdatefilter(filter) {
	return { type:"SET_DATE_FILTER", filter}
}

export function addfeedbackToResponse(reviewId, content, platform) {
	return { type:"ADD_FEEDBACK", reviewId, content, platform}
}

export function respondToReview(locationId, reviewId, content, platform) {
	return (dispatch) => {
		dispatch(startLoader())
		dispatch(addfeedbackToResponse(reviewId, content, platform))
		return fetch(`https://front-end-interview.herokuapp.com/candidate/3499c25fbc9df05d9efd46388079f562f24d0f54/location/`+locationId+`/reviews/`+reviewId+`?content=`+content, {
			method:"POST"
		})
		.then(response => response.json())
		.then((json) => {
			dispatch(stoptLoader())
		})
	}
}