const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Player = sequelize.define('player', {
    name: {
        type: DataTypes.STRING,
    },
    skill: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
})

module.exports = Player