import { createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from 'axios';
const initialState={
    loading:false,
    lawyers:[],
    error:'',
}

export const fetchLawyers=createAsyncThunk('Lawyer/fetchLawyers',()=>{
    console.log("Fetch lawyers failed:", action.error);
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.data)
    
})

const lawyerSlice=createSlice({
    name:'lawyer',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchLawyers.pending,state=>{
            state.loading=true
            console.log("Fetch lawyers faileda");
        })
        builder.addCase(fetchLawyers.fulfilled,(state,action)=>{
            state.loading=false
            state.lawyers=action.payload
            state.error=''
            console.log("Fetch lawyers failedb");
        })
        builder.addCase(fetchLawyers.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
            state.lawyers=[]
            console.log("Fetch lawyers failedc");
        })
    },

})
export default lawyerSlice.reducer;
