import {
    RESULTS_RES,
    LOADING_SEARCH_RES
} from '../actions'

const initialState = {
    search: '',
    searchLoading: false,
    results: []
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case RESULTS_RES:
            return {
                ...state,
                results: action.payload
            }
        case LOADING_SEARCH_RES:
            return {
                ...state,
                searchLoading: true
            }
        default:
            return state;
    }
}