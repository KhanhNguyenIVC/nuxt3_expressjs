const express = require('express')
const router = express.Router()
const countryController = require("../controllers/CountryController");

router.get('/countries', countryController.getAll)
router.get('/countries/:id', countryController.detail)
router.put('/countries', countryController.edit)

module.exports = router