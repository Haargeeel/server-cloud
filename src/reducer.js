import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { landing } from './Home/reducer'

export default combineReducers({
  landing,
  routing
})

