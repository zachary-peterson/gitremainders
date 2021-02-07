import {
    ADD_TO_VIDEO,
    IS_LOADING,
    RESET_VIDEO
} from '../actions'

const initialState = {
    isLoading: false,
    videoErrors: '',
    video: 0,
    part: 0.1
}

export const heroReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_VIDEO:
            return {
                ...state,
                isLoading: false,
                video: Math.round(state.video + action.payload)
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