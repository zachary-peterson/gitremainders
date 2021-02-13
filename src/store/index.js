import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {mainReducer} from './reducers';

export {
    chatFunctionality,
    setDayOfWeek
} from './actions'

export const store = createStore(mainReducer, applyMiddleware(thunk, logger))