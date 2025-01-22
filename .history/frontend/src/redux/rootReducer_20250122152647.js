import {combineReducers} from 'redux'
import LawyerReducer from './Lawyer/LawyerReducer'
const rootReducer=combineReducers({
    lawyer:LawyerReducer
})
export default rootReducer