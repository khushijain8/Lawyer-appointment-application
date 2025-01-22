import {
    FETCH_LAWYERS_REQUEST,
    FETCH_LAWYERS_SUCCESS,
    FETCH_LAWYERS_FAILURE
} from './LawyerTypes'
export const fetchLawyersRequest=()=>{
    return{
        type:FETCH_LAWYERS_REQUEST
    }
}
export const fetchLawyersSuccess=()=>{
    return{
        type:FETCH_LAWYERS_SUCCESS,
        payload: lawyers
    }
}
export const fetchLawyersFailure=()=>{
    return{
        type:FETCH_LAWYERS_FAILURE,
        payload:error
    }
}