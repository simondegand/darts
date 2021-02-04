import { SET_RELOAD } from "../actions"

const initialState = {
    mustReload: true
}

export default function(state = initialState, action){
    switch(action.type){
        case SET_RELOAD:
            return {...state, mustReload: action.payload};
        default:
            return state;
    }
}