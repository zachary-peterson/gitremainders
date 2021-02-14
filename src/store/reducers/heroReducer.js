import {
    SET_VIDEO,
    IS_LOADING,
    RESET_VIDEO
} from '../actions'

const initialState = {
    isLoading: false,
    videoErrors: '',
    video: 0,
}

export const heroReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VIDEO:
            return {
                ...state,
                isLoading: false,
                video: action.payload
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case RESET_VIDEO:
            return {
                ...state,
                video: 0
            }
        default:
            return state;
    }
}