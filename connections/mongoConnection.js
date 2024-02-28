const mongoose = require('mongoose');
const dbString = require('../configs/dbConfig');
const winston = require('winston');

const connection = () => {
    mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            winston.info('Connected to MongoDB');
        })
        .catch((error) => {
            winston.error('MongoDB connection error:', error);
        });
};

module.exports = {
    connect: connection
};