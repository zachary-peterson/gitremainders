import {
    SET_LANGUAGE,
    ADD_FRENCH_GREETING
} from '../actions'

const initialState = {
    language: 'french',
    french: [
        "Bonjour",
        "Allo",
        "Salut",
    ],
    english: [
        "Hello",
        "Hi",
        "Hey",
    ]
}

export const greetingReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        case ADD_FRENCH_GREETING:
            return {
                ...state,
                french: [...state.french, action.payload]
            }
        default:
            return state;
    }
}
