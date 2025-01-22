import axios from 'axios';
import{
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


export const fetchLawyers=()=>{
    return (dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            const lawyers= response.data
            dispatch(fetchLawyersSuccess(lawyers))
        })
        .catch(error=>{
            const errorMsg= error.message
            dispatch(fetchLawyersFailure(errorMsg))
        })

    }
}