const express = require('express');
const app =express();
require('dotenv').config();
require('./models/db')
const cors=require('cors')

const Lawyer = require("./models/lawyers"); 
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
app.get("/lawyers",async(req,res)=>{
    try{
        const lawyers=await Lawyer.find(); 
        res.json(lawyers);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
});
app.get("/bookSlot",async(req,res)=>{
    const {lawyerId,slotIndex}=req.body;
    console.log('hi');
    try {
        const lawyer=await Lawyer.findById(lawyerId);
        console.log(lawyers)
        if (!lawyer) {
          return res.status(404).json({ error: "Lawyer not found" });
        }
        if (!lawyer.availability[slotIndex].isAvailable) {
          return res.status(400).json({ error: "Slot is already booked or unavailable" });
        }
        lawyer.availability[slotIndex].isAvailable = false;
        await lawyer.save();
        res.status(200).json({ message: "Slot booked successfully" });
        console.log(`Slot booked for lawyer ${lawyerId}, slot ${slotIndex}`);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

})


