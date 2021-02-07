import {
    RETURN_DATE,
    RETURN_MONTH_NAME,
    RETURN_DAY_NAME
} from '../actions'

const initialState = {
    date: 6,
    month: 2,
    year: 2021,
    mName: 'February',
    dName: 'Saturday'
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
        default:
            return state;
    }
}