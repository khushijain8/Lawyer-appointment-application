const mongoose = require('mongoose');
const Schema=mongoose.Schema;


const lawyerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    speciality:
    { type: [String], required: true },
  availability: { 
    type: [{
      day: { type: String, required: true }, // e.g., "Monday"
      slots: [{
        time: { type: String, required: true }, // e.g., "09:00 AM - 10:00 AM"
        isAvailable: { type: Boolean, required: true }
      }]
    }],
    required: true
  },
  costPerAppointment: { type: Number, required: true }
});

const Lawyer = mongoose.model('Lawyer', lawyerSchema);

module.exports = Lawyer;