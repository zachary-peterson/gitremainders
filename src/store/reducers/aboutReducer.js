import {
    UPDATE_FNAME,
    UPDATE_LNAME,
    UPDATE_AGE
} from '../actions'

const initialState = {
    fname: "Zachary",
    lname: "Peterson",
    age: 27,
    dob: "09/05/1993",
    location: "NY",
    email: "zachary@zpwrites.com"
}

export const aboutReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_FNAME:
            return {
                ...state,
                fname: action.payload
            }
        case UPDATE_LNAME:
            return {
                ...state,
                lname: action.payload
            }
        case UPDATE_AGE:
            return {
                ...state,
                age: action.payload
            }
        default: 
            return state;
    }
}