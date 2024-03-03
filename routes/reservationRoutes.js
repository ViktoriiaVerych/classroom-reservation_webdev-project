// const express = require('express');
// const router = express.Router();
// const reservationController = require('../controllers/reservationController');

// router.get('/', reservationController.getAllReservations);
// router.get('/:id', reservationController.getReservationById);
// router.post('/', reservationController.createReservation);
// router.put('/:id', reservationController.updateReservation);
// router.delete('/:id', reservationController.deleteReservation);

// module.exports = router;


const express = require('express');
const app = express();
const reservationController = require('../controllers/reservationController');

app.get('/reservations', reservationController.getAllReservations);
app.get('/reservations/:id', reservationController.getReservationById);
app.post('/reservations', reservationController.createReservation);
app.put('/reservations/:id', reservationController.updateReservation);
app.delete('/reservations/:id', reservationController.deleteReservation);

module.exports = (app) => {
    app.get('/reservations', reservationController.getAllReservations);
    app.get('/reservations/:id', reservationController.getReservationById);
    app.post('/reservations', reservationController.createReservation);
    app.put('/reservations/:id', reservationController.updateReservation);
    app.delete('/reservations/:id', reservationController.deleteReservation);
};
