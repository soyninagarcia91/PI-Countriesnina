const { default: axios } = require('axios')
const {Op} = require('sequelize')
const Country = require('../models/Country')

const getCountryByName = async (req, res) => {
    const {name} = req.query
    try {
        //Op para que no sea sensible a mayusculas y minusculas
       name ? { [Op.iLike]: `%${name}%` } : ''
       const find = await Country.findAll({
        where: {name}
       })

       if(find.length === 0) {
        res.status(400).send('No se ha encontrado ningún país con ese nombre')
       } else {
        res.status(200).json({find})
       }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getCountryByName