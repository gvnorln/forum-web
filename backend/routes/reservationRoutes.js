//backend/routes/reservationRoutes.js

const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');
const validateReservation = require('../middleware/validateReservation');
const authMiddleware = require('../middleware/authMiddleware');

// Rute untuk membuat reservasi (POST)
router.post('/', authMiddleware, validateReservation, reservationController.createReservation);

// Rute untuk mendapatkan daftar reservasi (GET)
router.get('/', authMiddleware, reservationController.getAllReservations);

module.exports = router;
