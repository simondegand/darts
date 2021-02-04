export const ADD_SELECTED_POINT = 'ADD_SELECTED_POINT';
export const DELETE_SELECTED_POINT = 'DELETE_SELECTED_POINT';
export const SET_RELOAD = 'SET_RELOAD';
export const SET_HOVER = 'SET_HOVER';

export function AddSelectedPoint(point, points){
    return {type: ADD_SELECTED_POINT, payload: {point, points}};
}

export function DeletePoint(point){
    return {type:DELETE_SELECTED_POINT, payload: point};
}

export function SetReload(reload){
    return {type:SET_RELOAD, payload: reload};
}

export function SetHover(point, hover){
    return {type:SET_HOVER, payload: {point, hover}};
}