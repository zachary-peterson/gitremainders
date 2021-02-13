export const RETURN_DATE = 'RETURN_DATE';
export const RETURN_MONTH_NAME = 'RETURN_MONTH_NAME';
export const RETURN_DAY_NAME = 'RETURN_DAY_NAME';
export const SET_DAY_NAME = 'SET_DAY_NAME';
export const SET_MONTH_NAME = 'SET_MONTH_NAME';

export const setDayOfWeek = (journee) => (dispatch) => {
    dispatch({ type: SET_DAY_NAME, payload: journee });
};

export const setMonth = (mois) => (dispatch) => {
    dispatch({ type: SET_MONTH_NAME, payload: mois })
}