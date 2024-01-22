const express = require('express')
const router = express.Router()
const teamController = require("../controllers/TeamController");

router.get('/teams', teamController.getAll)

module.exports = router