import {configureStore,applyMiddleWare} from 'redux'
import rootReducer from './rootReducer'
const store=configureStore({
    reducer:rootReducer
})