const mongoose = require('mongoose');
const Lawyer = require('./lawyers'); // Update this with the correct path
require('./models/db')

const lawyer = new Lawyer({
  name: "John Doe",
  email: "john.doe@example.com",
  speciality: ["Family Law", "Criminal Law"],
  availability: [
    { date: "2025-01-23  10:00 to 10:30", isAvailable: true },
    { date: "2025-01-24  10:00 to 10:30", isAvailable: true }
  ],
  costPerAppointment: 1500
});

lawyer.save()
  .then(doc => {
    console.log('Lawyer added:', doc);
    mongoose.connection.close(); 
  })
  .catch(err => {
    console.error('Error adding lawyer:', err);
    mongoose.connection.close();
  });
