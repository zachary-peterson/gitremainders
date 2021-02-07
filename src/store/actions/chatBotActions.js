export const CHAT = 'CHAT';
export const CONVERSATION_ADD = 'CONVERSATION_ADD';
export const CONVERSATION_MINUS = 'CONVERSATION_MINUS'
export const CONVERSATION_RESET = 'CONVERSATION_RESET';
export const RETURN_WILDCARD_INFO = 'RETURN_WILDCARD_INFO';

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
    setTimeout(() => {
        if(msg.time === 0) {
            dispatch({ type: CHAT, payload: {message: "Hello, World"}});
        }else if(msg.time > 0) {
            if(msg.message.includes("are you")) {
                dispatch({ type: CHAT, payload: {message: "Doing well thank you"}});
            }else if(msg.message.includes("what's up") || msg.message.includes("whats up")) {
                dispatch({ type: CHAT, payload: {message: "Chilling, yeah."}});
            }
        }else if(msg.time >= 1) {
            
        }
    }, 2000);
}