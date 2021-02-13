import {
    RETURN_DATE,
    RETURN_MONTH_NAME,
    RETURN_DAY_NAME,
    SET_DAY_NAME,
    SET_MONTH_NAME
} from '../actions'

const initialState = {
    date: new Date().getDate(),
    month: (new Date().getMonth() + 1),
    year: 2021,
    mName: 'January',
    dName: 'Sunday'
}

export const dateReducer = (state = initialState, action) => {
    switch(action.type) {
        case RETURN_DATE:
            return {
                ...state,
                date: state.date,
                month: state.month,
                year: state.year
            }
        case RETURN_MONTH_NAME:
            return {
                ...state,
                mName: state.mName
            }
        case RETURN_DAY_NAME:
            return {
                ...state,
                dName: state.dName
            }
        case SET_DAY_NAME:
            return {
                ...state,
                dName: action.payload
            }
        case SET_MONTH_NAME:
            return {
                ...state,
                mName: action.payload
            }
        default:
            return state;
    }
}