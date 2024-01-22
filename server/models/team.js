const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Player = require("./player")

const Team = sequelize.define('team', {
    title: {
        type: DataTypes.STRING
    },
    quanlity: {
        type: DataTypes.INTEGER
    }
}, {
    // Other model options go here
})


/** Associations */
Player.belongsTo(Team)

Team.hasMany(Player, {
    'foreignKey': 'teamId'
})

module.exports = Team 