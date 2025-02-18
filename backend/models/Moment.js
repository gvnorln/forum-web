const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Moment = sequelize.define('Moment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'todaysMoment', 
    timestamps: false, 
});

module.exports = Moment;

