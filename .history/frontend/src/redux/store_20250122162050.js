import {configureStore,applyMiddleWare} from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import rootReducer from './rootReducer'
export const store=configureStore({
    reducer:rootReducer,
    middleware:applyMiddleWare(thunk)
})