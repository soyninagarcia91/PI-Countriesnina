const {Country} = require ('../db')
const {Activity} = require('../db')


const getTableCountries = async(req, res) => {
    try {
        const allCountries = await Country.findAll({
            include:Activity
        })
        res.status(200).json(allCountries)
    } catch (error) {
        req.status(500)
    }
}

module.exports = getTableCountries