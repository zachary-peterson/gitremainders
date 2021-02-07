export const ADD_TO_VIDEO = 'ADD_TO_VIDEO';
export const IS_LOADING = 'IS_LOADING';
export const RESET_VIDEO = 'RESET_VIDEO';

export const sliderTransition = () => (dispatch) => {
    dispatch({ type: ADD_TO_VIDEO, payload: 2 });
};

export const resetSlider = () => (dispatch) => {
    dispatch({ type: RESET_VIDEO });
};