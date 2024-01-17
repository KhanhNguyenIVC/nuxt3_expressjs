const Country = require("../models/country")

const getAll = async (req, res) => {
    const result = await Country.findAll({
        order: ['id']
    });

    res.json(result);
}


module.exports = {
    getAll,
}