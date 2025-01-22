import {configureStore,applyMiddleWare} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
export const store=configureStore({
    reducer:rootReducer
})