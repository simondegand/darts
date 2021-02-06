import { combineReducers } from "redux";
import PlayersReducer from "./PlayersReducer";
import SelectedReducer from "./SelectedReducer";

const rootReducer = combineReducers({
    selected: SelectedReducer,
    players: PlayersReducer
});

export default rootReducer;