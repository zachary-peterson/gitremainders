export const SET_VIDEO = 'SET_VIDEO';
export const IS_LOADING = 'IS_LOADING';
export const RESET_VIDEO = 'RESET_VIDEO';

export const sliderTransition = (num) => (dispatch) => {
    dispatch({ type: SET_VIDEO, payload: num });
};

export const resetSlider = () => (dispatch) => {
    dispatch({ type: RESET_VIDEO });
};