const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const BiayaOperasional = sequelize.define('BiayaOperasional', {
    tanggalKunjungan: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    agency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alamat: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    noTelepon: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    aktivitas: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    hasil: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'biayaOperasional',
    timestamps: true,
});

module.exports = BiayaOperasional;

