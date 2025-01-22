import { createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from 'axios';
const initialState={
    loading:false,
    lawyers:[],
    error:'',
}

export const fetchLawyers=createAsyncThunk('Lawyer/fetchLawyers',()=>{
    return axios
    .get("http://localhost:8080/lawyers")
        .then((response) => {
            console.log("API Response:", response.data);
            return response.data; 
        })
        .catch((error) => {
            console.log("API Error:", error); 
            throw error; 
        });
})

export const bookSlot = createAsyncThunk("Lawyer/bookSlot",
    async ({ lawyerId, slotIndex }, { rejectWithValue }) => {
      try {
        const response = await axios.post("http://localhost:8080/bookSlot", {
          lawyerId,
          slotIndex,
        });
        console.log("Slot booked successfully:", response.data);
        return { lawyerId, slotIndex };
      } catch (error) {
        console.error("Failed to book slot:", error);
        return rejectWithValue(error.response?.data || "Booking failed");
      }
    }
  );



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
        builder.addCase(bookSlot.pending,state=>{
            state.loading=true
            console.log("Fetch lawyers faileda");
        })
        builder.addCase(bookSlot.fulfilled,(state,action)=>{
            state.loading=false
            const {lawyerId,slotIndex}=action.payload;
            const lawyer=state.lawyers.find((l) => l._id === lawyerId);
            if (lawyer) {
              lawyer.availability[slotIndex].isAvailable=false;
            }
        })
        builder.addCase(bookSlot.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
            state.lawyers=[]
            console.log("Fetch lawyers failedc");
        })
    },

})
export default lawyerSlice.reducer;
