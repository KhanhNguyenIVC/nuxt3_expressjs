const Country = require("../models/country")
const { Op } = require("sequelize")

const getAll = async (req, res) => {
    const result = await Country.findAll({
        order: ['id']
    });

    res.json(result);
}

const detail = async (req, res) => {
    try {
        const result = await Country.findOne({
            where: {
                id: { [Op.eq]: parseInt(req.params.id) },
                name: { [Op.not]: null }
            }
        })

        res.json(result)
    } catch (error) {
        res.json({ status: false, error: error })
    }
}

const edit = async (req, res) => {
    try {
        const country = req.body
        const dataUpdate = {
            name: country.name,
            country_flag: country.country_flag,
        }
        const result = await Country.update(dataUpdate, {
            where: {
                id: country.id
            }
        })
        res.json({ status: true })
    } catch (error) {
        console.log(error);
        res.json({ status: false, error: error })
    }
}

module.exports = {
    getAll,
    detail,
    edit
}