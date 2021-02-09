import {
    RETURN_INFORMATION,
    PHILOSOPHY_ERRORS
} from '../actions'

const initialState = {
    p1: {
        fname: "Soren",
        lname: "Kierkegaard",
        dob: "May 5, 1813",
        quotes: [
            "I think I have the courage to doubt everything. I think I have the courage to fight everything.",
            "Aren't people absurd! They never use the freedoms they do have but demand those they dont have; they have freedom of thought, they demand freedom of speech",
            "...but simply recall that it is through sin that one first catches sight of salvation.",
            "What if everything n the world were a misunderstanding, what if laughter were really tears?",
            "I feel like a letter written back-to-front in the line, yet rampant as as three-tailed pasha jealous of myself and my thoughts as the bank if of its printing plates, and generally as self-reflected as any reflexive pronoun.",
            "If that were true of sorrows, I'd be the happiest of men: for I take all my troubles in advance and still they all stay behind.",
            "A life situation recalled has already passed into eternity and has no more temporal interest."
        ]
    },
    p2: {
        fname: "Immanuel",
        lname: "Kant",
        dob: "April 22, 1724,"
    },
    p3: {
        fname: "",
        lname: "",
        dob: ""
    },
    philosophyErrors: '',
}

export const philosophyReducer = (state = initialState, action) => {
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