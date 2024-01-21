const Activity = require("../models/Activity")


const getActivities = async (req, res) => {
    try {
        const allAct = await Activity.findAll()
        res.status(200).json(allAct)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getActivities