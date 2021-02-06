import { ADD_PLAYER } from "../actions"


const initialState = {
    players: []
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_PLAYER:
            var players = [...state.players];
            players.push(action.payload);
            return {...state, players};
        default:
            return state;
    }
}