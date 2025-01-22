import { createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from 'axios';
const initialState={
    loading:false,
    lawyers:[],
    error:' ',
}

export const fetchLawyers=createAsyncThunk('Lawyer/fetchLawyers',()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.data)
    
})

const lawyerSlice=createSlice({
    name:'lawyer',
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(fetchLawyers.pending,state=>{
            state.loading=true
        })
        builder.addCase(fetchLawyers.fulfilled,(state,action)=>{
            state.loading=false
            state.lawyers=action.payload
            state.error=' '
        })
        builder.addCase(fetchLawyers.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
            state.lawyers=[]
        })
    },

})
export default lawyerSlice.reducer;
