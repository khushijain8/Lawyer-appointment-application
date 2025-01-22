import {configureStore,applyMiddleWare} from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import LawyerReducer from './Lawyer/LawyerReducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store=configureStore({
    reducer:{
        lawyer:LawyerReducer
    },
})

