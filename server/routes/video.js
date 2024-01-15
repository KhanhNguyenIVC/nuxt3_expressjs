const express = require('express')
const router = express.Router()
const videoController = require("../controllers/VideoController");

router.get('/videos', videoController.getAll)
router.get('/videos/:id', videoController.getDetail)
router.get('/videos/clip/:id', videoController.getClip)
router.post('/videos', videoController.add)
router.put('/videos', videoController.edit)
router.delete('/videos', videoController.deleteVideo)

module.exports = router