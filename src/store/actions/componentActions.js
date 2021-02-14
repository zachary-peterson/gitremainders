export const SET_COMPONENT = 'SET_COMPONENT'
export const COMPONENT_LOADING = 'COMPONENT_LOADING';
export const SET_BACKGROUND = 'SET_BACKGROUND';

export const setBackgroundColor = (color) => (dispatch) => {
    dispatch({ type: SET_BACKGROUND, payload: color });
};
