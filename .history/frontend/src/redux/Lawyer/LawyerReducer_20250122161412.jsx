import { FETCH_LAWYERS_FAILURE, FETCH_LAWYERS_REQUEST, FETCH_LAWYERS_SUCCESS } from "./LawyerTypes"

const initialState={
    loading:false,
    lawyers:[],
    error:' '
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_LAWYERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_LAWYERS_SUCCESS:
            return{
                error : ' ',
                loading:false,
                lawyers:action.payload
            }
        case FETCH_LAWYERS_FAILURE:
            return{
                lawyers:[],
                loading:false,
                error:action.payload
            }
        default:

    }
}
export default reducer;