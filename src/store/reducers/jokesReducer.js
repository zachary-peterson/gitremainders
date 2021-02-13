import {
    TELL_A_JOKE,
    RESET_JOKE,
} from '../actions';

const initialState = {
    j1: {
        p1: "I'm a big fan of whiteboards.",
        p2: "I find them remarkable"
    },
    j2: {
        p1: "Why was King Arthur's army too tired to fight?",
        p2: "It had too many sleepless knights"
    },
    j3: {
        p1: "Which country's capital had the fastest growing population?",
        p2: "Ireland. Every day it's Dublin."
    },
    j4: {
        p1: "",
        p2: ""
    }
}

export const jokesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TELL_A_JOKE:
            return {
                ...state,
                j4: {
                    ...state,
                    q: action.payload,
                    a: action.payload,
                    p1: action.payload,
                    p2: action.payload
                }
            }
        case RESET_JOKE: 
            return {
                ...state,
                j4: {
                    ...state,
                    q: '',
                    a: '',
                    p1: '',
                    p2: ''
                }
            }
        default:
            return state;
    }
}