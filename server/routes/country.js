const express = require('express')
const router = express.Router()
const countryController = require("../controllers/CountryController");

router.get('/countries', countryController.getAll)

module.exports = router