
// const express = require('express');
// const connectDB = require('./connections/mongoConnection');
// const appRoutes = require('./routes/index');
// const { port } = require('./configs/appConfig');
//
// const app = express();
//
// // Connect Database
// connectDB();
//
// // Init Middleware
// app.use(express.json({ extended: false }));
//
// // Define Routes
// app.use('/api', appRoutes);
//
// const PORT = port;
//
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import routes
const classroomRoutes = require('./routers/classroomRoutes');
const reservationRoutes = require('./routers/reservationRoutes');
const userRoutes = require('./routers/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files

// Database connection
mongoose.connect('mongodb://localhost/classroomReservation', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Use routes
app.use('/api/classrooms', classroomRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
