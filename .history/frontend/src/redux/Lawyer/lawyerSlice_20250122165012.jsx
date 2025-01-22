import { createAsyncThunk,createSlice} from "@reduxjs/toolkit"
const initialState={
    loading:false,
    lawyers:[],
    error:' '
}

export const fetchLawyers=createAsyncThunk('Lawyer/fetchLawyers',()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.data.map((lawyer)=>lawyer.id))

})
export const lawyerSlice=createSlice({
    name:'lawyer',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchLawyers.pending,state=>{
            state.loading=true
        })
        builder.addCase(fetchLawyers.fulfilled,(state,action)=>{
            state.loading=true
            state.lawyers=action.payload
            state.error=' '
        })
        builder.addCase(fetchLawyers.rejected,(state,action)=>{
            state.loading=true
            state.error=action.error.message
            state.lawyers=[]
        })
    },

})

