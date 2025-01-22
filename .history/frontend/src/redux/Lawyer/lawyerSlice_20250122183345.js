import { createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from 'axios';
const initialState={
    loading:false,
    lawyers:[],
    error:'',
}

export const fetchLawyers=createAsyncThunk('Lawyer/fetchLawyers',()=>{
    return axios
    .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log("API Response:", response.data); // Log the API response
            return response.data; // Return the data for the fulfilled case
        })
        .catch((error) => {
            console.log("API Error:", error); // Log the error if the request fails
            throw error; // Throw the error to trigger the rejected case
        });
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
