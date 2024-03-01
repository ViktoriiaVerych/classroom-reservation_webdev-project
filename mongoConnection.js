const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://vverych:28072005@cluster0.h8qreby.mongodb.net/';
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});