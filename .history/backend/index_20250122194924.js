const express = require('express');
const app =express();
require('dotenv').config();
require('./models/db')

const cors=require('cors')
const bodyparser=require('body-parser')
const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
const lawyer = new Lawyer({
    name: "John Doe",
    email: "john.doe@example.com",
    speciality: ["Family Law", "Criminal Law"],
    availability: [
      { date: "2025-01-23", time: "10:00 to 10:30", isAvailable: true },
      { date: "2025-01-24", time: "10:00 to 10:30", isAvailable: true }
    ],
    costPerAppointment: 1500
  });
  
  lawyer.save()
    .then(doc => {
      console.log('Lawyer added:', doc);
    })
    .catch(err => {
      console.error('Error adding lawyer:', err);
    });
