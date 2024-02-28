const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    capacity: {
        type: Number,
        required: true
    },
    resources: {
        type: [String],// обладнання/ 
        default: []
    },
    reservations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation'
    }]
}, { timestamps: true });

module.exports = mongoose.model('Classroom', ClassroomSchema);
