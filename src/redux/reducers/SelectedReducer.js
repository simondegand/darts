import {ADD_SELECTED_POINT, DELETE_SELECTED_POINT, SET_HOVER} from '../actions/index';

const initialState = {
    selectedPoints : []
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_SELECTED_POINT:
            var selectedPoints = [...state.selectedPoints];
            selectedPoints.push(action.payload);
            return {...state, selectedPoints: selectedPoints};
        case DELETE_SELECTED_POINT:
            var selectedPoints = [...state.selectedPoints];
            selectedPoints = selectedPoints.filter(x => {return x !== action.payload});
            return {...state, selectedPoints: selectedPoints};
        case SET_HOVER:
            var selectedPoints = [...state.selectedPoints];
            var selectedPoint = selectedPoints.find((x) => action.payload.point === x);
            selectedPoint.hover = action.payload.hover;
            return {...state, selectedPoints: selectedPoints};
        default:
            return state;
    }
}