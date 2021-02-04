import { combineReducers } from "redux";
import DataReducer from "./DataReducer";
import SelectedReducer from "./SelectedReducer";

const rootReducer = combineReducers({
    selected: SelectedReducer,
    data: DataReducer
});

export default rootReducer;