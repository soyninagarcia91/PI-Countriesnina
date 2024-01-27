const {Op} = require('sequelize')
const {Country} = require('../db')

const getCountryByName = async (req, res) => {
    const {nameCommon} = req.query
    try {
        //Op para que no sea sensible a mayusculas y minusculas
       const find = await Country.findAll({
        where: {
            nameCommon: { [Op.iLike]: `%${nameCommon}%` }
        }
    })

       if(find.length > 0) {
        res.status(200).json(find)
       } 

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getCountryByName