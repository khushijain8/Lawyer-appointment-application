import {configureStore} from '@reduxjs/toolkit'
import LawyerReducer from './Lawyer/lawyerSlice'



export const store=configureStore({
    reducer:{
        lawyer:LawyerReducer
    },
})

