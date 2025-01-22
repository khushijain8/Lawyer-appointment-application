const mongoose = require('mongoose');
const express = require('express');
const app =express();
require('dotenv').config();
const Lawyer = require('./lawyers'); // Update this with the correct path
require('./db')

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
