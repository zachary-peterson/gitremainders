export const SET_COMPONENT = 'SET_COMPONENT'
export const COMPONENT_LOADING = 'COMPONENT_LOADING';
export const ADD_COMPONENT = 'ADD_COMPONENT';
export const SET_BACKGROUND = 'SET_BACKGROUND';

export const addComponent = (comp) => (dispatch) => {
    dispatch({ type: ADD_COMPONENT, payload: comp });
};

export const setBackgroundColor = (color) => (dispatch) => {
    dispatch({ type: SET_BACKGROUND, payload: color });
};