//backend/models/Reservation.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Reservation = sequelize.define('Reservation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tanggalAwal: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tanggalAkhir: {
        type: DataTypes.DATE,
        allowNull: false
    },
    lantai: {
        type: DataTypes.STRING,
        allowNull: false
    },
    namaKegiatan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    waktuAwal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    waktuAkhir: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fasilitasRuangan: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    layoutRuangan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    keteranganTambahan: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = Reservation;

