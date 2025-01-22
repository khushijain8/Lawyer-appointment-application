import {configureStore} from '@reduxjs/toolkit'
import LawyerReducer from './Lawyer/LawyerReducer'



export const store=configureStore({
    reducer:{
        lawyer:LawyerReducer
    },
})

