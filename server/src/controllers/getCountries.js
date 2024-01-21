const Country = require ('../models/Country')
const Activity = require('../models/Activity')

//! FALTA ACTIVIDADES TURISTICAS

const getCountries = async(req, res) => {
    try {
        const countries = await Country.findAll({
            include: Activity
        })
        res.status(200).json(countries)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

module.exports = getCountries