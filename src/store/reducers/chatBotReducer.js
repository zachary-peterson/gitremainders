import {
    CHAT,
    CONVERSATION_ADD,
    CONVERSATION_MINUS,
    CONVERSATION_RESET,
    RETURN_WILDCARD_INFO
} from '../actions'

const initialState = {
    counter: 0,
    test: [
        {
            message: '1. Services'
        },
        {
            message: '2. About'
        },
        {
            message: '3. Contact'
        },
        {
            message: '4. Other'
        },
        {
            message: '----------'
        },
],
    wildcard: {}
}

export const chatBotReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHAT:
            return {
                ...state,
                test: [...state.test, action.payload]
            }
        case CONVERSATION_ADD:
            return {
                ...state,
                counter: Math.round(state.counter + 1)
            }
        case CONVERSATION_MINUS:
            return {
                ...state,
                counter: Math.round(state.counter - 1)
            }
        case CONVERSATION_RESET:
            return {
                ...state,
                counter: 0
            }
        case RETURN_WILDCARD_INFO:
            return {
                ...state,
                wildcard: state.wildcard
            }
        default:
            return state;
    }
}