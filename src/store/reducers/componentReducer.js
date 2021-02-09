import {
    SET_COMPONENT,
    COMPONENT_LOADING
} from '../actions'

const initialState = {
    component: '',
    componentLoading: false
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
        default: 
            return state;
    }
}