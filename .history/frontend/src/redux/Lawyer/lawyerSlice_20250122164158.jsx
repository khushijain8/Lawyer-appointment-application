import { createAsyncThunk,createSlice} from "@reduxjs/toolkit"
const initialState={
    loading:false,
    lawyers:[],
    error:' '
}

export const fetchLawyers=createAsyncThunk('Lawyer/')=>{
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
