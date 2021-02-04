import { combineReducers } from "redux";
import SelectedReducer from "./SelectedReducer";

const rootReducer = combineReducers({
    selected: SelectedReducer
});

export default rootReducer;