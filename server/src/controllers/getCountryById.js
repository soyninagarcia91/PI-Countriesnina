const Activity = require("../models/Activity")
const Country = require("../models/Country")


const getCountryById = async (req, res) => {
    const {cca3} = req.params
    try {
       const country = await Country.findByPk(cca3, {
        include: Activity
       })
       if(country) {
        res.status(200).json({country})
       } else{
        res.status(400).send('No se encontró ningún país con ese id')
       }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getCountryById