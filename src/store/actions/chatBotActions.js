import axios from 'axios';
import {store} from '../index'

import {
    SET_COMPONENT,
    ADD_TO_VIDEO
} from './index';

export const CHAT = 'CHAT';
export const CONVERSATION_ADD = 'CONVERSATION_ADD';
export const CONVERSATION_MINUS = 'CONVERSATION_MINUS'
export const CONVERSATION_RESET = 'CONVERSATION_RESET';
export const RETURN_WILDCARD_INFO = 'RETURN_WILDCARD_INFO';
export const IS_MEMBER = 'IS_MEMBER';
export const TEST_PASSWORD = 'TEST_PASSWORD'


export const chatFunctionality = (msg) => (dispatch) => {
    // this is the start of the chat functioniality
    // the msg is the users input from landing
    dispatch({ type: CHAT, payload: msg });
    
    // this is to keep track of how long the conversation
    // has been going on for, adding to the length opens
    // up more options for differnet conversation trees.
    dispatch({ type: CONVERSATION_ADD });

    // I set a timeout because otherwise the response is
    // instant and it's actually really creepy.
    // if you take the timeout off the responses will be
    // instantaneous

    const dialogueOptions = store.getState();
    const msgNumberPC = (dialogueOptions.chatBotReducer.test.length - 1);
    const previousChat = dialogueOptions.chatBotReducer.test[msgNumberPC]

    const msgNumberPR = (dialogueOptions.chatBotReducer.test.length - 2);
    const previousResponse = dialogueOptions.chatBotReducer.test[msgNumberPR];

    const jokeOptions = (Math.floor(Math.random() * Math.floor(3)));
    const quoteOptions = (Math.floor(Math.random() * Math.floor(7)));

    
    const passwordPossibility = previousChat.message.split('password = ')
    console.log(passwordPossibility[1])
    
    setTimeout(() => {


        if(msg.message.includes("hi") || msg.message.includes("Hi") || msg.message.includes("hello") || msg.message.includes("Hello") || msg.message.includes("hey") || msg.message.includes("Hey")) {
            dispatch({ type: CHAT, payload: {message: "Hello, World"}});
            dispatch({ type: CHAT, payload: {message: "How are you?"}});
        } else if(msg.message.includes("are you") || (previousResponse.message === "How are you?" && msg.message.includes("you"))) {
            dispatch({ type: CHAT, payload: {message: "Doing well thank you"}});
            dispatch({ type: CHAT, payload: {message: "What's up?"}});
        }else if(msg.message.includes("what's up") || msg.message.includes("whats up")) {
            dispatch({ type: CHAT, payload: {message: "Oh, you know."}});
            dispatch({ type: CHAT, payload: {message: "Chilling, yeah."}});
        }else if(msg.message.includes("1")) {
            dispatch({ type: CHAT, payload: {message: "All services are time permitting. Consultations on freelance web design and development projects."}});
            dispatch({ type: CHAT, payload: {message: "Open to taking on new film projects, looking for individuals interested in being interviewed."}});

        }else if(msg.message.includes("2") || msg.message.includes("about") || msg.message.includes("About")) {
            dispatch({ type: CHAT, payload: {message: "Zip consulting is a technology consulting company, specializing in Redux and action based design."}});
            dispatch({ type: CHAT, payload: {message: "Most time recently spent using Javascript."}});
        }else if(msg.message.includes("3") || msg.message.includes("contact") || msg.message.includes("Contact")) {
            dispatch({ type: CHAT, payload: {message: "Email Address:"}});
            dispatch({ type: CHAT, payload: {message: dialogueOptions.aboutReducer.email}});
        }else if(msg.message.includes("another") && msg.message.includes("joke")) {
            if(jokeOptions === 0) {
                dispatch({ type: CHAT, payload: {message: dialogueOptions.jokesReducer.j1.p1 }})
                dispatch({ type: CHAT, payload: {message: dialogueOptions.jokesReducer.j1.p2 }})
            }else if(jokeOptions === 1) {
                dispatch({ type: CHAT, payload: {message: dialogueOptions.jokesReducer.j2.q }})
                setTimeout(() => {
                    dispatch({ type: CHAT, payload: {message: dialogueOptions.jokesReducer.j2.a }})
                }, 1500);
            }else if(jokeOptions === 2) {
                dispatch({ type: CHAT, payload: {message: dialogueOptions.jokesReducer.j3.q}})
                dispatch({ type: CHAT, payload: {message: dialogueOptions.jokesReducer.j3.a }})
            }
        }else if(msg.message.includes("4") || msg.message.includes("other") || msg.message.includes("Other")) {
            dispatch({ type: CHAT, payload: {message: dialogueOptions.philosophyReducer.p1.quotes[quoteOptions]}});
            
            dispatch({ type: CHAT, payload: {message: dialogueOptions.philosophyReducer.p1.fname + " " + dialogueOptions.philosophyReducer.p1.lname}});
        }else if(msg.message.includes("tell") && msg.message.includes("joke")) {
            dispatch({ type: CHAT, payload: {message: "Okay."}});
            dispatch({ type: CHAT, payload: {message: "Why was six afraid of seven?"}});
        }else if(msg.message.includes("why") && previousResponse.message === "Why was six afraid of seven?") {
            dispatch({ type: CHAT, payload: {message: "Because seven ate nine."}});
            dispatch({ type: CHAT, payload: {message: "Punny, right?"}});
        }else if(msg.message.includes("services") || msg.message.includes("Services")) {
            if(msg.message.includes("go")) {
                dispatch({ type: CHAT, payload: {message: "Okay!"} });
                dispatch({ type: CHAT, payload: {message: "Coming right up!"} });
            }else {
                dispatch({ type: CHAT, payload: {message: "All services are time permitting. Consultations on freelance web design and development projects."}});
                dispatch({ type: CHAT, payload: {message: "Open to taking on new film projects, looking for individuals interested in being interviewed."}});
            }
        }else if(msg.message.includes("password")) {

            dispatch({ type: TEST_PASSWORD });


            if(passwordPossibility[1] == "test") {
                dispatch({ type: CHAT, payload: {message: "Working"} });
            }

            // axios.post('localhost:2019/',passwordPossibility[1])
            // .then(res => {
            //     console.log(res);
            // })
            // .catch(err => {
            //     console.log(err);
            // })

            dispatch({ type: IS_MEMBER });
            dispatch({ type: CHAT, payload: {message: "Confirmed"} });
            // dispatch({ type: SET_COMPONENT, payload: 1 });
            // dispatch({ type: ADD_TO_VIDEO, payload: 1 });
        }
        else {
            dispatch({ type: CHAT, payload: {message: "Sorry, that response doesn't seem to register."}});
            dispatch({ type: CHAT, payload: {message: "Please try again."}});
        }
    }, 2000);
}