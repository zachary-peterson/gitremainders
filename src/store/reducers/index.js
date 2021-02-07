import { combineReducers } from "redux";

import { heroReducer } from './heroReducer';
import { dateReducer } from './dateReducer';
import { chatBotReducer } from './chatBotReducer';

export const mainReducer = combineReducers({
    heroReducer,
    dateReducer,
    chatBotReducer
})