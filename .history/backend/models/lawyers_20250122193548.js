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
    { 
        type: [String],
        required: true 
    },

    availability:{ 
        type: [{ date: String, isAvailable: Boolean }],
        required: true
    },


    costPerAppointment: 
    { 
        type: Number,
        required: true 
    }
});

const Lawyer = mongoose.model('lawyers',lawyerSchema,'firm1');

module.exports = Lawyer;
