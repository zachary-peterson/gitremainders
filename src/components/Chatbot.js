import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { chatFunctionality } from '../store';

const form = {
    message: '',
    time: 0
}

//  I think what I'm trying today will leverage node

export const Chatbot = () => {
    const [chatFunction, setChatFunction] = useState(form);
    const test = useSelector(state => state.chatBotReducer.test);
    const dispatch = useDispatch();
    const counter = useSelector(state => state.chatBotReducer.counter)
    const mName = useSelector(state => state.dateReducer.mName);
    const messages = useSelector(state => state.chatBotReducer.test)

    // console.log(mName);
    console.log(window.location.pathname)

    const handleChanges = e => {
        e.preventDefault();
        setChatFunction({ ...chatFunction, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        chatFunction.time = counter;
        chatFunction.wildcard = mName;
        dispatch(chatFunctionality(chatFunction));
        setChatFunction(form)
    }

    

    

    return (
        <div className='chatbot__container'>
            <div className='chatbot__messages'>
                {
                    test.length > 0 ? test.map(msg => {
                        return (
                            <div key={msg.time}>
                                <p>{msg.message}</p>
                            </div>
                        )
                    }) : null
                }
            </div>

            <form className='chatbot'>
                <label htmlFor='message'>Chat</label>
                <input 
                    type='text'
                    name='message'
                    onChange={handleChanges}
                    value={chatFunction.message}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}