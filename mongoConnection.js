const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://vverych:Pasc8FqLWZA6iRsQ@cluster0.h8qreby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});


// const mongoose = require('mongoose');
// const dbConfig = require('../configs/dbConfig');

// mongoose.connect(dbConfig.uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch(err => console.error('Could not connect to MongoDB...', err));

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function() {
//     console.log('Connected to MongoDB');
// });
