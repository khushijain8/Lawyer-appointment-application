// const mongoose = require('mongoose');
// const Lawyer = require('./models/lawyers'); 
// require('dotenv').config();
// require('./models/db'); 
// const lawyersData = [
//   {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     speciality: ["Family Law", "Criminal Law"],
//     availability: [
//       { date: "2025-01-23", time: "10:00 to 10:30", isAvailable: true },
//       { date: "2025-01-24", time: "11:00 to 11:30", isAvailable: false }
//     ],
//     costPerAppointment: 1500,
//   },
//   {
//     name: "Jane Smith",
//     email: "jane.smith@example.com",
//     speciality: ["Corporate Law", "Intellectual Property"],
//     availability: [
//       { date: "2025-01-23", time: "14:00 to 14:30", isAvailable: true },
//       { date: "2025-01-25", time: "15:00 to 15:30", isAvailable: true }
//     ],
//     costPerAppointment: 2000,
//   },
//   {
//     name: "Michael Brown",
//     email: "michael.brown@example.com",
//     speciality: ["Tax Law", "Real Estate Law"],
//     availability: [
//       { date: "2025-01-26", time: "09:00 to 09:30", isAvailable: true },
//       { date: "2025-01-27", time: "13:00 to 13:30", isAvailable: false }
//     ],
//     costPerAppointment: 1800,
//   },
//   {
//     name: "Emily Davis",
//     email: "emily.davis@example.com",
//     speciality: ["Immigration Law", "Criminal Law"],
//     availability: [
//       { date: "2025-01-28", time: "10:00 to 10:30", isAvailable: true },
//       { date: "2025-01-30", time: "11:00 to 11:30", isAvailable: true }
//     ],
//     costPerAppointment: 1700,
//   },
//   {
//     name: "Chris Wilson",
//     email: "chris.wilson@example.com",
//     speciality: ["Environmental Law"],
//     availability: [
//       { date: "2025-01-23", time: "16:00 to 16:30", isAvailable: true },
//       { date: "2025-01-29", time: "17:00 to 17:30", isAvailable: false }
//     ],
//     costPerAppointment: 1900,
//   },
//   {
//     name: "Sophia Johnson",
//     email: "sophia.johnson@example.com",
//     speciality: ["Family Law", "Corporate Law"],
//     availability: [
//       { date: "2025-01-24", time: "09:00 to 09:30", isAvailable: true },
//       { date: "2025-01-25", time: "10:30 to 11:00", isAvailable: false }
//     ],
//     costPerAppointment: 2100,
//   },
//   {
//     name: "Daniel Martinez",
//     email: "daniel.martinez@example.com",
//     speciality: ["Criminal Law"],
//     availability: [
//       { date: "2025-01-28", time: "08:00 to 08:30", isAvailable: true },
//       { date: "2025-01-30", time: "09:30 to 10:00", isAvailable: false }
//     ],
//     costPerAppointment: 1600,
//   },
//   {
//     name: "Olivia Garcia",
//     email: "olivia.garcia@example.com",
//     speciality: ["Immigration Law", "Family Law"],
//     availability: [
//       { date: "2025-01-23", time: "12:00 to 12:30", isAvailable: true },
//       { date: "2025-01-24", time: "13:00 to 13:30", isAvailable: false }
//     ],
//     costPerAppointment: 1500,
//   },
//   {
//     name: "James Taylor",
//     email: "james.taylor@example.com",
//     speciality: ["Corporate Law", "Real Estate Law"],
//     availability: [
//       { date: "2025-01-23", time: "10:30 to 11:00", isAvailable: true },
//       { date: "2025-01-24", time: "14:30 to 15:00", isAvailable: true }
//     ],
//     costPerAppointment: 2000,
//   },
//   {
//     name: "Isabella Hernandez",
//     email: "isabella.hernandez@example.com",
//     speciality: ["Intellectual Property", "Criminal Law"],
//     availability: [
//       { date: "2025-01-25", time: "11:30 to 12:00", isAvailable: true },
//       { date: "2025-01-27", time: "12:30 to 13:00", isAvailable: true }
//     ],
//     costPerAppointment: 2200,
//   },
// ];

// // Save all lawyers to the database
// Lawyer.insertMany(lawyersData)
//   .then(docs => {
//     console.log('Lawyers added:', docs);
//   })
//   .catch(err => {
//     console.error('Error adding lawyers:', err);
//   });
