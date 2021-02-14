import {
    SET_COMPONENT,
    COMPONENT_LOADING,
    SET_BACKGROUND,
} from '../actions'

const initialState = {
    component: '',
    componentLoading: false,
    background: '',
}

export const componentReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COMPONENT:
            return {
                ...state,
                component: action.payload
            }
        case COMPONENT_LOADING:
            return {
                ...state,
                componentLoading: true
            }
        case SET_BACKGROUND:
            return {
                ...state,
                background: action.payload
            }
        default: 
            return state;
    }
}