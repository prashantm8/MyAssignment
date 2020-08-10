import { combineReducers } from "redux"
import EmployeeState from '../reducer'

const appReducer = combineReducers({
    EmployeeState
})
const rootReducer = (state, action) => {
	return appReducer(state, action)
}


export default rootReducer