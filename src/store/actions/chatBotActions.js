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
        dispatch({ type: CHAT, payload: {message: "Hello, World"}});
        
        if(msg.message.includes("are you")) {
            dispatch({ type: CHAT, payload: {message: "Doing well thank you"}});
        }else if(msg.message.includes("what's up") || msg.message.includes("whats up")) {
            dispatch({ type: CHAT, payload: {message: "Chilling, yeah."}});
        }else if(msg.message.includes("1") || msg.message.includes("services") || msg.message.includes("Services")) {
            dispatch({ type: CHAT, payload: {message: "All services are time permitting."}});
            dispatch({ type: CHAT, payload: {message: "Consultations on freelance web design and development projects."}});
            dispatch({ type: CHAT, payload: {message: "Open to taking on new film projects, looking for individuals interested in being interviewed."}});

        }else if(msg.message.includes("2") || msg.message.includes("about") || msg.message.includes("About")) {
            dispatch({ type: CHAT, payload: {message: "Zip consulting is a technology consulting company, specializing in Redux and action based design."}});
        }else if(msg.message.includes("3") || msg.message.includes("contact") || msg.message.includes("Contact")) {
            dispatch({ type: CHAT, payload: {message: "Email Address:"}});
            dispatch({ type: CHAT, payload: {message: "zachary@zpwrites.com"}});
        }else if(msg.message.includes("4") || msg.message.includes("other") || msg.message.includes("Other")) {
            dispatch({ type: CHAT, payload: {message: "Random Quote:"}});
            dispatch({ type: CHAT, payload: {message: "...but simply recall that it is through sin that one first catches sight of salvation."}});
        }else {
            dispatch({ type: CHAT, payload: {message: "Sorry, that response doesn't seem to register."}});
        }
    }, 2000);
}