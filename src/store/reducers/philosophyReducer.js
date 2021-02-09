import {
    RETURN_INFORMATION,
    PHILOSOPHY_ERRORS
} from '../actions'

const initialState = {
    fname: "Soren",
    lname: "Kierkegaard",
    philosophyErrors: '',
}

export const philosophyReducer = (state = initialState, action) => (dispatch) => {
    switch(action.type) {
        case RETURN_INFORMATION:
            return {
                ...state,
                kierkegaard: {
                    ...state,
                    branch: "Existentialism"
                }
            }
        case PHILOSOPHY_ERRORS: 
            return {
                ...state,
                philosophyErrors: action.payload
            }
        default: 
            return state;
    }
}