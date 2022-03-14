import { combineReducers } from "redux";
import Reducer from "./reducer";
import RReducer from "./RReducer";

export default combineReducers({
    Favourite : Reducer,
    Movies : RReducer
})