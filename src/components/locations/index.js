import { connect } from "react-redux"
import * as locationsAction from "../../actions/locations_action" 
import * as reviewsAction from "../../actions/reviews_action" 
import { bindActionCreators } from "redux"

function formatLocations(locations) {
	locations = locations.map((location) => {
		return {
			id: location.id,
			label: location.name,
			value: location.name
		}
	})
	return locations
}

function mapStateToProps(state){
	return {
		data: formatLocations(state.locations.data),
		loading: state.loader.loading,
		error: state.locations.error,
		locationId: state.locations.selectedLocationId
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...locationsAction, ...reviewsAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)
