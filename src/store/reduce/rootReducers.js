import { combineReducers } from "redux";
import loginReducer from "./reducers";
import { reducer as form } from "redux-form";
const rootReducers = combineReducers({
    loginReducer,
    form
});
export default rootReducers;