const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Country = sequelize.define('country', {
    name: {
        type: DataTypes.STRING,
    },
    country_flag: {
        type: DataTypes.STRING,
        validate: {
            is: /^[A-Z]{5}$/i
        }
    }
}, {
    // Other model options go here
})

module.exports = Country