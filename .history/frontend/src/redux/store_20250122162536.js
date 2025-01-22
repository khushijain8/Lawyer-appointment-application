import {configureStore,applyMiddleWare} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './rootReducer'
export const store=configureStore({
    reducer:rootReducer,
    middleware:applyMiddleWare(thunk)
})