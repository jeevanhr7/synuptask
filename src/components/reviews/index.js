import { connect } from "react-redux"
import * as locationsAction from "../../actions/locations_action" 

import * as reviewsAction from "../../actions/reviews_action" 
import { bindActionCreators } from "redux"
import _ from "lodash"
import moment from "moment"

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

function applydatefilter(reviews, filters) {
	const dateLimit = {
		'all': 365,
		'Past Year': 12,
		'Past 6 Months': 6,
		'Past Month': 1
	};

	let result = []
	let monthsLimit = dateLimit[filters.date]

	result = _.filter(reviews, (review) => {
		let month_diff = moment().diff(review.date, 'months')
		return month_diff < monthsLimit 
	})
	return result
}

function applyplatformfilter(reviews, filters) {
	if(filters.platform === "All platforms") {
		return reviews
	} else {
		let result = _.filter(reviews, (review) => {
			return review.platform === filters.platform
		})
		return result;
	}
}

function applybasefilter(reviews, filters) {
	let result = []
	switch(filters.base) {
		case "Total Interaction" :
			result = reviews;
			break;
		case "New Interaction":
			result = _.filter(reviews, (review) => {
				let month_diff = moment().diff(review.date, 'months')
				return month_diff < 1 
			})
			break;
		case "Positive Interaction":
			result = _.filter(reviews, ((review) => {
				if( review.rating >= 3 ) {
					return review
				}
			}))
			break;
		case "Negative Interaction":
			result = _.filter(reviews, ((review) => {
				if( review.rating < 3 ) {	
					return review
				}
			}))
			break;
		default:
			result = reviews;
	}
	return result;
}

function getPlatforms(reviews) {
	return Object.keys(reviews)
}

function mapStateToProps(state) {
	let formated_reviews = formatReviews(state.reviews.data)

	let base_filter_result = applybasefilter(formated_reviews, state.reviews.filters)
	let platform_filter_result = applyplatformfilter(base_filter_result, state.reviews.filters)
	let date_filter_result = applydatefilter(platform_filter_result, state.reviews.filters)

	return {
		data: date_filter_result,
		loading: state.loader.loading,
		error: state.locations.error,
		platforms: getPlatforms(state.reviews.data),
		selectedLocationId: state.locations.selectedLocationId
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...locationsAction, ...reviewsAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
