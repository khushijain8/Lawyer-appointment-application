import { createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import axios from 'axios';
const initialState={
    loading:false,
    lawyers:[],
    error:'',
    selectedSlot: {
        lawyerId: null,
        slotIndex: null,
    },
    firm:null,
}

export const fetchLawyers=createAsyncThunk('Lawyer/fetchLawyers',async (_, { getState })=>{
    console.log('hi');
    const {firm}=getState().firm;
    console.log({firm});
    return axios
    .get("http://localhost:8080/lawyers/"+firm)
        .then((response) => {
            console.log("API Response:", response.data);
            return response.data; 
        })
        .catch((error) => {
            console.log("API Error:", error); 
            throw error; 
        });
})

export const bookSlot = createAsyncThunk("Lawyer/bookSlot", async (_, { getState, rejectWithValue }) => {
    const firm = getState().firm;
    const {selectedSlot}=getState().lawyer;
    const {lawyerId,slotIndex}=selectedSlot;
    if (!lawyerId || slotIndex === null) {
        return rejectWithValue("Invalid slot or lawyerId");
    }
    try {
      const response = await axios.post("http://localhost:8080/lawyers/bookSlot/"+firm, {
        lawyerId,
        slotIndex,
      });

      console.log("Slot booked successfully:", response.data);
      return { lawyerId, slotIndex };
    } catch (error) {
        console.log(lawyerId,slotIndex);
        console.error("Failed to book slot:", error);
        return rejectWithValue(error.response?.data || "Booking failed");
      }
    }
  );



const lawyerSlice=createSlice({
    name:'lawyer',
    initialState,
    reducers: {
        selectSlot:(state,action)=>{
          state.selectedSlot = action.payload;
        },
        setFirm: (state, action) => {
            state.firm = action.payload;
        }
      },
      
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
export const { selectSlot ,setFirm} = lawyerSlice.actions;
export default lawyerSlice.reducer;
