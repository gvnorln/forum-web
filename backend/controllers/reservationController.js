//backend/controllers/reservationController.js

const Reservation = require("../models/Reservation");

exports.createReservation = async (req, res) => {
  const {
    tanggalAwal,
    tanggalAkhir,
    lantai,
    namaKegiatan,
    pic,
    waktuAwal,
    waktuAkhir,
    fasilitasRuangan,
    layoutRuangan,
    keteranganTambahan,
  } = req.body;

  try {
    const newReservation = await Reservation.create({
      tanggalAwal,
      tanggalAkhir,
      lantai,
      namaKegiatan,
      pic,
      waktuAwal,
      waktuAkhir,
      fasilitasRuangan,
      layoutRuangan,
      keteranganTambahan,
    });

    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


