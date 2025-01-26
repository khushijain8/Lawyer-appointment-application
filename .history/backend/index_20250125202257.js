const express = require('express');
const app =express();
require('dotenv').config();
require('./models/db')
const cors=require('cors')

const {LawyerFirm1,LawyerFirm2} = require("./models/lawyers"); 

const lawyerModels = {
    firm1: LawyerFirm1,
    firm2: LawyerFirm2,
};

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
app.get('/', (req, res) => {
    res.send('Backend for Lawyer application');
});

app.get("/lawyers/:firm",async(req,res)=>{
    const { firm } = req.params;
    const LawyerModel = lawyerModels[firm];
    try{
        const lawyers=await LawyerModel.find(); 
        res.json(lawyers);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/bookSlot/:firm",async(req,res)=>{
    console.log('hi');
    const { firm } = req.params;
    const LawyerModel = lawyerModels[firm];
    const {lawyerId,slotIndex}=req.body;
    
    console.log(lawyerId);
    console.log(slotIndex);
    try {
        const lawyer=await LawyerModel.findById(lawyerId);
  
        if (!lawyer) {
          return res.status(404).json({ error: "Lawyer not found" });
        }
        if (!lawyer.availability[slotIndex].isAvailable) {
          return res.status(400).json({ error: "Slot is already booked or unavailable" });
        }
        lawyer.availability[slotIndex].isAvailable = false;
        const bookingString =`Slot: ${lawyer.availability[slotIndex].date} at ${lawyer.availability[slotIndex].time}\nbooked on ${new Date().toLocaleString()}`;
        lawyer.bookingHistory.push(bookingString);
        await lawyer.save();
        res.status(200).json({ message: "Slot booked successfully" });
        console.log(`Slot booked for lawyer ${lawyerId}, slot ${slotIndex}`);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }

})


