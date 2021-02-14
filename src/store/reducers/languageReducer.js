import {
    SET_LANGUAGE,
    ADD_FRENCH_GREETING
} from '../actions'

const initialState = {
    language: 'french',
    french: {
        greetings: {
            g1: {
                g: "Bonjour",
                q: "Comment ca va?"
            },
            g2: {
                g: "Salut",
                q: "Ca va?"
            },
            g3: {
                g: "Allo",
                q: "Comment ca va?"
            }
        },
        jokes: {
            j1: {
                p1: "C’est l’histoire de deux pommes de terre.",
                p2: "Une d’elles se fait écraser et l’autre s’écrie 'Oh purée !'"
            },
            j2: {
                p1: "Qu’est-ce qui est petit, rond, vert, et qui monte et qui descend ?",
                p2: "Un petit pois dans un ascenseur !"
            },
            j3: {
                p1: "Toto est à l’école et demande s’il peut aller au WC.",
                p2: "La maîtresse dit non."
            },
        }  
    },
    english: {
        greetings: {
            g1: {
                g: "Hello, world.",
                q: "How are you?"
            },
            g2: {
                g: "Hey there.",
                q: "How are you doing?"
            },
            g3: {
                g: "Howdy",
                q: "How're you?"
            }
        },
        jokes: {
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
        }  
    }
}

export const languageReducer = (state = initialState, action) => {
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
