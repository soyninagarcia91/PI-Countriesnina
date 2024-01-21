const { Country, Activity } = require('../db')


const postActivities = async (req, res) => {
    const {name, difficulty, duration, season, countries} = req.body
    try {
        const createActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        if(!name || !difficulty || !duration || !season || !countries || countries.length === 0){
            res.status(400).send('Todos los campos deben estar completos')
        }
        const countriesDB = await Country.findAll({
            where: {name: countries} //buscar paises que se relacionen con la actividad
        })
        await createActivity.addCountries(countriesDB) 
        //agrego a pais relacionado con actividad a BD

        res.status(200).json({message: 'La actividad fue creada con éxito', activity: createActivity})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = postActivities