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
            "A life situation recalled has already passed into eternity and has no more temporal interest.",
        ]
    },
    p2: {
        fname: "Immanuel",
        lname: "Kant",
        dob: "April 22, 1724",
        quotes: [
            "Happiness is not an ideal of reason, but of imagination.",
            "He who is cruel to animals becomes hard also in his dealings with men. We can judge the heart of a man by his treatment of animals.",
            "Science is organized knowledge. Wisdom is organized life.",
            "Experience without theory is blind, but theory without experience is mere intellectual play.",
            "Thoughts without content are empty, intuitions without concepts are blind.",
            "Morality is not properly the doctrine of how we may make ourselves happy, but how we may make ourselves worthy of happiness.",
            "Act as if the maxim of your action were to become through your will a general natural law",
        ]
    },
    p3: {
        fname: "Ayn",
        lname: "Rand",
        dob: "February 2, 1905",
        quotes: [
            "The question isn't who is going to let me; it's who is going to stop me.",
            "I swear, by my life and my love of it, that I will never live for the sake of another man, nor ask another man to live for mine.",
            "The smallest minority on earth is the individual. Those who deny individual rights cannot claim to be defenders of minorities.",
            "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
            "We can evade reality, but we cannot evade the consequences of evading reality",
            "Learn to value yourself, which means: to fight for your happiness.",
            "To say 'I love you' one must first be able to say the 'I.'"
        ]
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