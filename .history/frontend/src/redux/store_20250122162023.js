import {configureStore,applyMiddleWare} from '@reduxjs/toolkit'
import think from 'redux-thunk';

import rootReducer from './rootReducer'
export const store=configureStore({
    reducer:rootReducer
})