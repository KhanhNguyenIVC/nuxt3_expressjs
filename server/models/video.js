const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Video = sequelize.define('video', {
    title: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    poster: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
})

module.exports = Video