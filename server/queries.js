const pgp = require('pg-promise')({
    // Initialization Options
})
const db = pgp('postgres://postgres:root@localhost:5432/nuxt3')

module.exports = db