const { Country, Activity } = require("../db");

const postActivities = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const numericDifficulty = parseInt(difficulty, 10);
    const createActivity = await Activity.create({
      name,
      difficulty: numericDifficulty,
      duration,
      countries,
      season,
    });
    //agrego a pais relacionado con actividad a BD

    await createActivity.addCountries(countries);

    // const activityWithCountry = await Activity.findOrCreate({
    //   where: { name },
    //   attributes: {
    //     exclude: ["updatedAt", "createdAt"],
    //   },
    //   include: {
    //     model: Country,
    //     through: {
    //       attributes: ["cca3"],
    //     },
    //   },
    // });
    res.status(200).json(createActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postActivities;
