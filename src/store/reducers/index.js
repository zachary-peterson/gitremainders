import { combineReducers } from "redux";

import { heroReducer } from './heroReducer';
import { dateReducer } from './dateReducer';
import { chatBotReducer } from './chatBotReducer';
import { philosophyReducer } from './philosophyReducer';
import { aboutReducer } from './aboutReducer';
import { jokesReducer } from './jokesReducer';
import { componentReducer } from './componentReducer';
import { greetingReducer } from './greetingReducer';

export const mainReducer = combineReducers({
    heroReducer,
    dateReducer,
    chatBotReducer,
    philosophyReducer,
    aboutReducer,
    jokesReducer,
    componentReducer,
    greetingReducer
})