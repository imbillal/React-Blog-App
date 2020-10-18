import { combineReducers } from 'redux'
import authReducer from './AuthReducer'
import postReducer from './postReducer'
export default combineReducers({
    postReducer, authReducer
})