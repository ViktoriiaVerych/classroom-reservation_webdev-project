const Reservation = require('../models/reservation');

// List all reservations
exports.listAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('classroom', 'name location');
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get a specific reservation by ID
exports.getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id).populate('classroom', 'name location');
        if (!reservation) {
            return res.status(404).send({ message: 'Reservation not found' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Create a new reservation
exports.createReservation = async (req, res) => {
    const reservation = new Reservation({
        user: req.body.user,
        classroom: req.body.classroom,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        status: req.body.status,
    });

    try {
        const newReservation = await reservation.save();
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Update an existing reservation
exports.updateReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!reservation) {
            return res.status(404).send({ message: 'Reservation not found' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Delete a reservation
exports.deleteReservation = async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!reservation) {
            return res.status(404).send({ message: 'Reservation not found' });
        }
        res.status(200).send({ message: 'Reservation deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
