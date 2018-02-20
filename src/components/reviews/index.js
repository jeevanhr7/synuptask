import { connect } from "react-redux"
import * as locationsAction from "../../actions/locations_action" 
import * as loaderAction from "../../actions/loader_action" 
import * as reviewsAction from "../../actions/reviews_action" 
import { bindActionCreators } from "redux"

function formatReviews(reviews) {
	let platforms = Object.keys(reviews)
	let final_reviews = []

	platforms.map((platform) => {
		reviews[platform].map((review) => {
			 final_reviews.push({...review, 'platform': platform})
		})
	})

	return final_reviews
}

function getPlatforms(reviews) {
	return Object.keys(reviews)
}

function mapStateToProps(state) {
	let a = formatReviews(state.reviews.data)
	console.log("!!!!!")
	console.log(a)
	return {
		data: formatReviews(state.reviews.data),
		loading: state.loader.loading,
		error: state.locations.error,
		platforms: getPlatforms(state.reviews.data)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...locationsAction, ...reviewsAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
