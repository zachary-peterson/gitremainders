import {
    SET_COMPONENT,
    COMPONENT_LOADING,
    ADD_COMPONENT
} from '../actions'

const initialState = {
    component: '',
    componentLoading: false,
    components: [
        {
            name: 'Test',
            description: 'Test',
            link: 'https://images.unsplash.com/photo-1612976958534-e01dda4a1a29?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            alt: 'alternate description'
        },
    ],
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
        case ADD_COMPONENT:
            return {
                ...state,
                components: [...state.components, action.payload]
            }
        default: 
            return state;
    }
}