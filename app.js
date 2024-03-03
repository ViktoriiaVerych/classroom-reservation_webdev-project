const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./mongoConnection');

// Импорт маршрутов
const classroomRoutes = require('./routes/classroomRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Промежуточное ПО
app.use(bodyParser.json());
app.use(express.static('public'));

// Использование маршрутов
app.use('/api/classrooms', classroomRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/users', userRoutes);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


//WAS CHANGED