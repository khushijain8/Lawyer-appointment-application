const express = require('express');
const app =express();
require('dotenv').config();
require('./models/db')

const cors=require('cors')
const bodyparser=require('body-parser')
const PORT = process.env.PORT || 8080
connectDB();
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

