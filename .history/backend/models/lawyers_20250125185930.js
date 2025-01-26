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
        type:[
            {
              date: { type: String, required: true }, 
              time: { type: String, required: true }, 
              isAvailable: { type: Boolean, required: true }, 
            },
        ],
        required: true,
    },
    bookingHistory:{
        type: [String],
    },


    costPerAppointment: 
    { 
        type: Number,
        required: true 
    }
});

const Lawyer_Firm1 = mongoose.model('lawyers',lawyerSchema,'firm1');
const Lawyer_Firm2 = mongoose.model('lawyers',lawyerSchema,'firm2');

module.exports = { LawyerFirm1, LawyerFirm2 };

//scalable