const Video = require("../models/video")
const fs = require('fs');

const getAll = async (req, res) => {
    const result = await Video.findAll({
        order: ['id']
    });

    res.json(result);
}

const getDetail = async (req, res) => {
    const result = await Video.findOne({ where: { id: parseInt(req.params.id) } })
    res.json(result)
}

const add = async (req, res) => {
    try {
        const video = req.body
        const result = await Video.create(video);
        res.json({ status: true })
    } catch (error) {
        console.log(error);
        res.json({ status: false })
    }
}

const edit = async (req, res) => {
    try {
        const video = req.body
        const dataUpdate = {
            title: video.title,
            poster: video.poster,
            duration: video.duration
        }
        const result = await Video.update(dataUpdate, {
            where: {
                id: video.id
            }
        })
        res.json({ status: true })
    } catch (error) {
        console.log(error);
        res.json({ status: false })
    }
}

const deleteVideo = async (req, res) => {
    try {
        await Video.destroy({
            where: {
                id: req.body.id
            },
        });
        res.json({ status: true })
    } catch (error) {
        console.log(error)
        res.json({ status: false })
    }
}
const getClip = async (req, res) => {
    try {
        const videoPath = `assets/${req.params.id}.mp4`;
        const videoStat = fs.statSync(videoPath);
        const fileSize = videoStat.size;
        const videoRange = req.headers.range;
        if (videoRange) {
            const parts = videoRange.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1]
                ? parseInt(parts[1], 10)
                : fileSize - 1;
            const chunksize = (end - start) + 1;
            const file = fs.createReadStream(videoPath, { start, end });
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4',
            };
            res.writeHead(206, head);
            file.pipe(res);
        } else {
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
            };
            res.writeHead(200, head);
            fs.createReadStream(videoPath).pipe(res);
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAll,
    getDetail,
    getClip,
    add,
    edit,
    deleteVideo
}