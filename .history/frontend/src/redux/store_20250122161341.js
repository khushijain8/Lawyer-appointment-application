import {configureStore,applyMiddleWare} from 'redux'
import rootReducer from './rootReducer'
export const store=configureStore({
    reducer:rootReducer
})