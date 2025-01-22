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
        console.log(lawyers);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
});


