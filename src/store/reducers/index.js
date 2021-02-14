import { combineReducers } from "redux";

import { heroReducer } from './heroReducer';
import { dateReducer } from './dateReducer';
import { chatBotReducer } from './chatBotReducer';
import { philosophyReducer } from './philosophyReducer';
import { aboutReducer } from './aboutReducer';
import { componentReducer } from './componentReducer';
import { languageReducer } from './languageReducer';


export const mainReducer = combineReducers({
    heroReducer,
    dateReducer,
    chatBotReducer,
    philosophyReducer,
    aboutReducer,
    componentReducer,
    languageReducer,
    
})