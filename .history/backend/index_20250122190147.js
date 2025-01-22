const express = require('express');
const app =express();
require('dotenv').config();

require('./Models/db')
const AuthRouter=require('./Routes/AuthRouter')
const cors=require('cors')
const bodyparser=require('body-parser')
const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

app.use(bodyparser.json());
app.use('/auth',AuthRouter)
app.use(cors());
