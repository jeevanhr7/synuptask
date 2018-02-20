import { combineReducers } from 'redux'
import { reducer } from 'redux-storage'
import { routerReducer as routing } from 'react-router-redux'
import locations from "./locations_reducer"
import reviews from "./reviews_reducer"
import loader from "./loader_reducer"
import { reducer as reducerForm } from 'redux-form';


const appReducer = reducer(combineReducers({
  routing,
  locations,
  loader,
  reviews,
  form: reducerForm,
}))

const helloReducer = (state,action) => appReducer(state,action)

export default helloReducer
