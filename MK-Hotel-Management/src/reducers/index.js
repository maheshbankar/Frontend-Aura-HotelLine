import { combineReducers } from 'redux'
import user_reducer from './user_reducer'


export default combineReducers({
    // ---------------masters------------
    userManagement: user_reducer,
  
})