const mongoose = require('mongoose');
const Lawyer = require('./lawyers'); // Update this with the correct path

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/lawyers', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Example data to insert
const lawyer = new Lawyer({
  name: "John Doe",
  email: "john.doe@example.com",
  speciality: ["Family Law", "Criminal Law"],
  availability: [
    { date: "2025-01-23", isAvailable: true },
    { date: "2025-01-24", isAvailable: false }
  ],
  costPerAppointment: 1500
});

// Save the data to the database
lawyer.save()
  .then(doc => {
    console.log('Lawyer added:', doc);
    mongoose.connection.close(); // Close the connection after saving
  })
  .catch(err => {
    console.error('Error adding lawyer:', err);
    mongoose.connection.close();
  });
