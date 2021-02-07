import {
    ADD_TO_VIDEO,
    IS_LOADING,
    RESET_VIDEO
} from '../actions'

const initialState = {
    isLoading: false,
    videoErrors: '',
    video: 1,
    part: 0.1
}

export const heroReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_VIDEO:
            return {
                ...state,
                isLoading: false,
                video: state.video * action.payload
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case RESET_VIDEO:
            return {
                ...state,
                video: 1
            }
        default:
            return state;
    }
}