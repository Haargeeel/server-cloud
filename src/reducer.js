import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { landing } from './Home/reducer'
import { explore } from './Explore/reducer'
import { navigation } from './Navigation/reducer'
import { luck } from './Luck/reducer'

export default combineReducers({
  landing,
  explore,
  navigation,
  luck,
  routing
})

