const Team = require("../models/team")
const Player = require("../models/player")

const getAll = async (req, res) => {
    const result = await Team.findAll({
        include: Player,
        order: ['id']
    });

    res.json(result);
}

module.exports = {
    getAll
}