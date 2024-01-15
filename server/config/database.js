const { Sequelize } = require('sequelize');

const DB_HOSTNAME = 'localhost'
const DB_DATABASE = 'nuxt3'
const DB_USERNAME = 'postgres'
const DB_PASSWORD = 'root'
const DB_DIALECT  = 'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
const sequelize   = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    dialect: DB_DIALECT
})

// Testing the connection
try {
    async () => {
        await sequelize.authenticate();
    }
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize